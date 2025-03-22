import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonAlert } from '@ionic/react';
import React, { useState } from 'react';

const Tab2: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    if (fullName && email) {
      alert(`Submitted:\nName: ${fullName}\nEmail: ${email}`);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput value={fullName} onIonChange={e => setFullName(e.detail.value!)} required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit} style={{ margin: '20px' }}>Submit</IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Validation Error'}
          message={'Please fill out all fields.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
