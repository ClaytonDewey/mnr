import { useEffect, useState } from 'react';

import { fetchContestList } from '../api-client';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
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
            <div className="category">Propose a New Name</div>
            <div className="contest">
              <form onSubmit={handleSubmit}>
                <input type="text" name="contestName" />
                <br />
                <input type="text" name="categoryName" />
                <br />
                <input type="text" name="description" />
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
