//== Class definition

var DatatableHtmlTableDemo = function() {
  //== Private functions

  // demo initializer
  var demo = function() {

    var datatable = $('.m-datatable').mDatatable({
      data: {
        saveState: {cookie: false},
      },
      search: {
        input: $('#generalSearch'),
      },
      columns: [
        {
          field: 'No',
          type: 'number',
          width: 20,
        },
        {
          field: 'Valid',
          type: 'number',
          width: 50,
        },
        {
          field: 'Invalid',
          type: 'number',
          width: 50,
        },
        {
          field: 'Duplicate',
          type: 'number',
          width: 70,
        },
        {
          field: 'Deposit Paid',
          type: 'number',
          width: 10
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
  DatatableHtmlTableDemo.init();
});