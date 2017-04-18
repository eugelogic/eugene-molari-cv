$(function() {
    $('.chart').easyPieChart({
        barColor: '#ff6801',
        lineWidth: 5,
        size: 150,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});
