import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';

import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import {AppVersion} from '@ionic-native/app-version';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;
	protected app_version: string;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private app: App,
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
		private appVersion: AppVersion
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
			{ title: 'Components', component: ComponentsListPage, icon: 'grid' }
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.appVersion.getVersionNumber().then(
				(versionNumber) => {
					this.app_version = versionNumber;
				},
				(error) => {
					console.log(error);
				});
		});
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}
