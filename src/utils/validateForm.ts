
export default function validateForm(name: string, email: string, CPF: string,  telephone: string, topic: string, reason: string, messageDescription: string, navigate: any) {
    let isError = false;
	
	
    if (name.length == 0) {
      alert('Preencha todos os campos');
      return;
    };

    if ( email.length == 0) {
        alert('Preencha todos os campos');
        return;
    }

    if (CPF.length == 0) {
        alert('Preencha todos os campos');
        return;
    }

    if (telephone.length == 0) {
        alert('Preencha todos os campos');
        return;
    }

    if (topic == 'default') {
        alert('Preencha todos os campos');
        return;
    }

    if (reason == 'default') {
        alert('Preencha todos os campos');
        return;
    }

    if (messageDescription.length == 0) {
        alert('Preencha todos os campos');
        return;
    }

    if (!isError) {
        return navigate("/CompletedForm"); // <-- navigate on no error
      }
  }
