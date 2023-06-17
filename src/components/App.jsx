import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transaction from 'data/transactions.json';

const uStats = 'UPLOAD STATS';
function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={uStats} items={data} />
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transaction} />
      </section>
    </div>
  );
}

export default App;
