/**

*/
function import_data () {
var ss = SpreadsheetApp.openId('id_sheet'); // ID source Spreadsheet
var ssh = ss.getSheetByName('name_sheet').getRange('Range').getValues(); // name source sheet and range to use.

var sd = SpreadsheetApp.getActive();
var sdh = sd.getSheetByName('name_ destination_sheet').getRange(1, 1, ssh.length, ssh[0].length).setValues(ssh); // name of the destination sheet

}
