function includeFormula () {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var shs = ss.getSheetByName("Name sheet");
  var cell = shs.getRange(1,1);
  var value = ("=Query('Nombre de la hoja'!A:J; "SELECT A,B,C \WHERE (B =  OR B = ) AND (C = OR C = )\";1)");

  cell.setFormula(value);
  cell.setValue(value);

}  
