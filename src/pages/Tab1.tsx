import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2 style={{ padding: '20px' }}>Welcome to My Ionic App!</h2>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
