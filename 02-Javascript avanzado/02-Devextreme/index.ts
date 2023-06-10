import './style.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Drawer from 'devextreme/ui/drawer';
import List from 'devextreme/ui/list';
import ToolBar from 'devextreme/ui/toolbar';
import navigation from './navigation';

const drawerElement = document.createElement('div');
const drawerContentElement = document.createElement('div');
drawerElement.appendChild(drawerContentElement);
drawerContentElement.setAttribute('id', 'content');
drawerContentElement.innerText = 'Contenido del drawer';

drawerElement.setAttribute('class', 'dx-theme-background-color');

const toolbarElement = document.createElement('div');
toolbarElement.setAttribute('id', 'toolbar');

const appElement = document.getElementById('app')!;

appElement.appendChild(toolbarElement);
appElement.appendChild(drawerElement);

const drawer = new Drawer(drawerElement, {
	opened: true,
	height: 'calc(100% - 46px)',
	closeOnOutsideClick: true,
	template() {
		// Creamos un elemento div para la lista
		const listElement = document.createElement('div');
		listElement.setAttribute('class', 'panel-list');
		listElement.style.width = '200px';
		// eslint-disable-next-line no-new
		new List(listElement, {
			dataSource: navigation,
			hoverStateEnabled: false,
			focusStateEnabled: false,
			activeStateEnabled: false,
			elementAttr: {class: 'dx-theme-accent-as-background-color'},
		});
		return listElement;
	},
});

const toolbar = new ToolBar(toolbarElement, {
	items: [{
		widget: 'dxButton',
		location: 'before',
		options: {
			icon: 'menu',
			onClick() {
				void drawer.toggle();
			},
		},
	}],
});
