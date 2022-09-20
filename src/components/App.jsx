import Profile from './Profile/Profile';
import Section from './Section/Section';
import Container from './Container/Container';

import userData from '../user.json';

function App() {
  return (
    <Container>
      <Section title="1 - Профиль социальной сети">
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </Section>
      <Section title="2- Секция статистики"></Section>
      <Section title="3 - Список друзей"></Section>
      <Section title="4 - История транзакций"></Section>
    </Container>
  );
}

export default App;
