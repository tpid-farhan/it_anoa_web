//== Class definition

var DatatableHtmlTableDemo2 = function() {
  //== Private functions

  // demo initializer
  var demo = function() {

    var datatable = $('.m-datatable-2').mDatatable({
      data: {
        saveState: {cookie: false},
      },
      search: {
        input: $('#generalSearch2'),
      },
      columns: [
        {
          field: 'Deposit Paid',
          type: 'number',
        },
        {
          field: 'Order Date',
          type: 'date',
          format: 'YYYY-MM-DD',
        },
      ],
    });
  };

  return {
    //== Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  DatatableHtmlTableDemo2.init();
});