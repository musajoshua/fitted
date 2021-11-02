import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import GroupMembers from "./assets/Group 6895.png";

function App() {
  return (
    <div className="bg-mainColor">
      <Navbar />
      <div className="flex justify-between bg-white h-2/3 rounded-lg shadow-lg p-12 m-12">
        <div className="flex flex-col justify-between w-2/5 text-white">
          <div className="bg-purpleImg h-full bg-cover rounded-3xl bg-center bg-no-repeat px-11">
            <div className="pt-16 pb-8">
              <p className="mb-2">Event name & date</p>
              <h1 className="font-semibold">MeandYou2021</h1>
              <h1 className="font-bold text-4xl">21-Jul-2021</h1>
            </div>
            <div className="pt-8 pb-8">
              <p className="mb-2">Upcoming Reminder</p>
              <h1 className="font-bold text-4xl">12 Days</h1>
            </div>
            <div className="pt-8 pb-16">
              <p className="text-sm">
                Any reminders that your admin sets will show up here
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-peopleImg h-4/5 bg-top w-full bg-contain bg-no-repeat rounded-lg"></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-grey-500">Group Name</p>
              <h1 className="font-bold">Queen Deluxe Group</h1>
            </div>
            <div>
              <p className="text-grey-500">Group Members</p>
              <img src={GroupMembers} alt="GroupMembers" />
            </div>
            <div>
              <p className="text-grey-500">Group type</p>
              <h1 className="font-bold">Male only</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-12">
        <div className="bg-white shadow-lg rounded-lg p-12 mr-6 w-1/3 text-black text-center px-11 py-8">
          <h1 className="font-bold mb-7">My Measurments</h1>
          <p className="text-justify mb-14">
            Use our app to predict your measurements based on your body data. If
            you already have measurements on Fitted, we’ll append these to your
            group automatically
          </p>
          <button className="bg-buttonColor py-2 px-8 text-center text-white rounded-lg">
            Get Started
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-12 ml-6 w-2/3 text-black text-center px-11 py-8">
          <table class="table-auto w-full">
            <thead className="border-b-2 border-gray-400 border-solid text-grey500">
              <tr className="capitalize">
                <th></th>
                <th>Group Members</th>
                <th>Measurments Taken</th>
                <th>Last measurement recipient</th>
                <th>Date sent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-grey500">
                <td className="py-4">
                  <span className="bg-grey5 rounded-full px-1 py-1.5">SO</span>
                </td>
                <td className="py-4">Sikuru Abija</td>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4">Kayode</td>
                <td className="py-4">21-Jul-2021</td>
              </tr>
              <tr className="text-grey500">
                <td className="py-4">
                  <span className="bg-grey5 rounded-full px-1 py-1.5">SO</span>
                </td>
                <td className="py-4">Sikuru Abija</td>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4">Kayode</td>
                <td className="py-4">21-Jul-2021</td>
              </tr>
              <tr className="text-grey500">
                <td className="py-4">
                  <span className="bg-grey5 rounded-full px-1 py-1.5">SO</span>
                </td>
                <td className="py-4">Sikuru Abija</td>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4">Kayode</td>
                <td className="py-4">21-Jul-2021</td>
              </tr>
              <tr className="text-grey500">
                <td className="py-4">
                  <span className="bg-grey5 rounded-full px-1 py-1.5">SO</span>
                </td>
                <td className="py-4">Sikuru Abija</td>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4">Kayode</td>
                <td className="py-4">21-Jul-2021</td>
              </tr>
              <tr className="text-grey500">
                <td className="py-4">
                  <span className="bg-grey5 rounded-full px-1 py-1.5">SO</span>
                </td>
                <td className="py-4">Sikuru Abija</td>
                <td className="py-4">
                  <input type="checkbox" />
                </td>
                <td className="py-4">Kayode</td>
                <td className="py-4">21-Jul-2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
