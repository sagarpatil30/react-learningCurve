import PropTypes from "prop-types";
import { Username } from "./Username";
import { UserFavouriteFoods } from "./UserFavouriteFoods";

export function UserProfile(props) {
  console.log(props);
  return (
    <div id="user-profile">
      <Username username={props.username} age={props.age} />
      <ul>
        <li>Bat</li>
        <li>Ball</li>
        <li>Wicket</li>
      </ul>
      <UserFavouriteFoods />
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age:PropTypes.number.isRequired
};
