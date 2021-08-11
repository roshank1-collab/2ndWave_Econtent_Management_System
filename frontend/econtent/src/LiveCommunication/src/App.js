import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import Header from '../../header/header';

const projectID = 'bf8b2dff-7dc7-4c12-a1da-a8e208928430';

const Appp = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <Header />
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default Appp;
