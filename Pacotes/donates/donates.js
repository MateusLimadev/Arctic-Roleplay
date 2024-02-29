function showDetails(event, detailsId) {
    event.preventDefault();
    var overlayDetails = document.getElementById('overlayDetails');
    var detailsContent = document.getElementById(detailsId).innerHTML;
    overlayDetails.innerHTML = detailsContent;
    document.getElementById('overlay').style.display = 'block';
  }

  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }

   document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('overlay').style.display = 'none';
  });