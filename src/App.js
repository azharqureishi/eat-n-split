import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";
function App() {
  return (
    <div className=" grid grid-cols-2 min-h-min my-32 mx-32">
      <div className=" w-5/6">
        <FriendList />
        <FormAddFriend />
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
