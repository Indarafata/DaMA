import "../imports/api/fixtures";
import "../imports/api/methods";
import "../imports/api/publications";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const SEED_EMAIL = "andre@dama.com";
const SEED_PASSWORD = "password";
const SEED_USERNAME = "ahmedindarafata";
const SEED_NAME = "Ahmed Indarafata";
const SEED_ROLE = "admin";

const SEED_EMAIL1 = "ahmed@dama.com";
const SEED_PASSWORD1 = "password";
const SEED_USERNAME1 = "ahmedindara";
const SEED_NAME1 = "Ahmed Indarafata A.M.S.";
const SEED_ROLE1 = "admin";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      email: SEED_EMAIL,
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
      profile: {
        name: SEED_NAME,
        role: SEED_ROLE,
      },
    });
  }

  else if (!Accounts.findUserByUsername(SEED_USERNAME1)) {
    Accounts.createUser({
      email: SEED_EMAIL1,
      username: SEED_USERNAME1,
      password: SEED_PASSWORD1,
      profile: {
        name: SEED_NAME1,
        role: SEED_ROLE1,
      },
    });
  }
});
