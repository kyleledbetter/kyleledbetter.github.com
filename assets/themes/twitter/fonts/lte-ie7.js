/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe191;',
			'icon-github' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-facebook' : '&#xe002;',
			'icon-dribbble' : '&#xe003;',
			'icon-google-plus' : '&#xe004;',
			'icon-instagram' : '&#xe005;',
			'icon-mail' : '&#xe006;',
			'icon-feed' : '&#xe007;',
			'icon-feed-2' : '&#xe008;',
			'icon-film' : '&#xe009;',
			'icon-chart' : '&#xe019;',
			'icon-bars' : '&#xe011;',
			'icon-bars-2' : '&#xe010;',
			'icon-bars-3' : '&#xe00f;',
			'icon-stats' : '&#xe00e;',
			'icon-stats-2' : '&#xe00d;',
			'icon-stats-3' : '&#xe00c;',
			'icon-pie' : '&#xe00a;',
			'icon-pie-2' : '&#xe00b;',
			'icon-newspaper' : '&#xe012;',
			'icon-bullhorn' : '&#xe013;',
			'icon-envelop' : '&#xe15b;',
			'icon-cancel-circle' : '&#xe0bd;',
			'icon-close' : '&#xe0c6;',
			'icon-plus-circle' : '&#xe0c3;',
			'icon-plus' : '&#xe014;',
			'icon-minus' : '&#xe015;',
			'icon-search' : '&#xe10b;',
			'icon-menu' : '&#xe0ef;',
			'icon-menu-close' : '&#xe088;',
			'icon-menu-2' : '&#xe087;',
			'icon-menu-3' : '&#xe086;',
			'icon-arrow-up' : '&#xe091;',
			'icon-arrow-right' : '&#xe092;',
			'icon-arrow-down' : '&#xe093;',
			'icon-arrow-left' : '&#xe094;',
			'icon-arrow-left-2' : '&#xe0a0;',
			'icon-arrow-bottom' : '&#xe09f;',
			'icon-arrow-right-2' : '&#xe09e;',
			'icon-arrow-up-2' : '&#xe09d;',
			'icon-move' : '&#xe0cd;',
			'icon-loop' : '&#xe0a6;',
			'icon-upload' : '&#xe0dd;',
			'icon-download' : '&#xe0dc;',
			'icon-file-zip' : '&#xe020;',
			'icon-file-pdf' : '&#xe01c;',
			'icon-file-word' : '&#xe01e;',
			'icon-file-excel' : '&#xe01f;',
			'icon-file-powerpoint' : '&#xe021;',
			'icon-file-xml' : '&#xe022;',
			'icon-file-css' : '&#xe023;',
			'icon-health' : '&#xe113;',
			'icon-cube4' : '&#xe0fc;',
			'icon-info' : '&#xe0c2;',
			'icon-minus-circle' : '&#xe0c1;',
			'icon-new-tab' : '&#xe029;',
			'icon-screen' : '&#xe141;',
			'icon-cart' : '&#xe168;',
			'icon-cog' : '&#xe111;',
			'icon-cog-2' : '&#xe112;',
			'icon-mobile' : '&#xe016;',
			'icon-database' : '&#xe017;',
			'icon-lock' : '&#xe10e;',
			'icon-unlocked' : '&#xe10f;',
			'icon-new' : '&#xe183;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};