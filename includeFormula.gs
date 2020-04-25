function includeFormula () {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var shs = ss.getSheetByName("Test Formula");
  var cell = shs.getRange(1,1);
  var value = ("=Query('Estadisticas'!A:E; \"SELECT A,B,C,D,E WHERE (A ='COMFAMILIAR CARTAGENA EPSS' OR A ='CAJACOPI EPS-S')AND (E ='Urgencia Pediatrica' OR E ='Urgencia')\";1)");
  cell.setFormula(value);
  cell.setValue(value);

} 
