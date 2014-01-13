/**
* ownCloud
*
* @author Vincent Petry
* @copyright 2014 Vincent Petry <pvince81@owncloud.com>
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
* License as published by the Free Software Foundation; either
* version 3 of the License, or any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU AFFERO GENERAL PUBLIC LICENSE for more details.
*
* You should have received a copy of the GNU Affero General Public
* License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*
*/

/**
 * Simulate the variables that are normally set by PHP code
 */

// from core/js/config.php
window.TESTING = true;
window.oc_debug = true;
window.datepickerFormatDate = 'MM d, yy';
window.dayNames = [
	'Sunday',
	'Monday',
   	'Tuesday',
   	'Wednesday',
   	'Thursday',
   	'Friday',
   	'Saturday'
];
window.monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
window.firstDay = 0;

window.oc_webroot = location.href + '/';
window.oc_appswebroots = {
	"files": window.oc_webroot + '/apps/files/'
};
