 document.getElementById('person-historia').addEventListener('input', function() {
    const minLength = 1000;
    const currentLength = this.value.length;

    if (currentLength < minLength) {
      this.setCustomValidity('A história deve ter no mínimo 15 Linhas !');
    } else {
      this.setCustomValidity('');
    }
  });


