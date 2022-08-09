import { Section, Container } from './App.styled'

import user from '../data/user';
import statsData from '../data/statsData';
import friends from '../data/friends';
import transactions from '../data/transactions';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionsTable from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Section>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Statistics title="Upload stats" stats={statsData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionsTable items={transactions} />
        </Container>
      </Section>
    </>
  );
}
