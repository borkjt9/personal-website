import React from 'react';
import map from 'lodash/map';
import moize from 'moize';

function renderSkillsList(skillsDictionary) {
  const skillsTable = map(skillsDictionary, (skills, key) => (
    <div className="portfolio-page__skills__row">
      <p className="portfolio-page__skills__table__key">{`${key}: `}</p>
      <p className="portfolio-page__skills__table__description">{skills.reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}</p>
    </div>
  ));

  return (
    <div className="portfolio-page__section portfolio-page__skills">
      <h2 className="portfolio-page__section__title">Skills</h2>
      <div className="portfolio-page__skills__table">
        {skillsTable}
      </div>
    </div>
  );
}

const memoizedRenderSkillsList = moize.react(renderSkillsList);
export default memoizedRenderSkillsList;
