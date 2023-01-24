import { useEffect, useState } from 'react';

import { addNewContest, fetchContestList } from '../api-client';

import ContestPreview from './contest-preview';
import Header from './header';

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests ?? []);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!initialContests) {
      fetchContestList().then((contests) => {
        setContests(contests);
      });
    }
  }, [initialContests]);

  const handleClick = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  };

  const handleNewContestSubmit = async (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newContestName = event.target.contestName;
    const newCategoryName = event.target.categoryName;
    const newDescription = event.target.description;
    const newContest = await addNewContest({
      id: '',
      contestName: newContestName.value,
      categoryName: newCategoryName.value,
      description: newDescription.value,
    });
    console.log(...initialContests, newContest);
    // setContests(....initialContests, newContest);
  };

  return (
    <>
      <Header message="Naming Contests" />

      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <ContestPreview
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}

        {!showForm ? (
          <div style={{ textAlign: 'center' }}>
            <a href="/" className="link" onClick={handleClick}>
              Create a New Contest
            </a>
          </div>
        ) : (
          <div className="contest-preview">
            <div className="category">Add a New Contest</div>
            <div className="contest">
              <form onSubmit={handleNewContestSubmit}>
                <input
                  type="text"
                  name="contestName"
                  placeholder="Enter Contest Name"
                />
                <br />
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter Contest Category"
                />
                <br />
                <textarea
                  name="description"
                  placeholder="Enter Contest Description"
                ></textarea>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContestList;
