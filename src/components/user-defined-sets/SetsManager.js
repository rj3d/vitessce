import React from 'react';
import CurrentSetManager from './CurrentSetManager';
import NamedSetManager from './NamedSetManager';

export default function SetsManager(props) {
  const {
    sets,
    onUpdateSets = (msg) => {
      console.warn(`onUpdateSets from SetsManager ${msg}`);
    },
  } = props;
  return (
    <div className="sets-manager">
      <CurrentSetManager sets={sets} onUpdateSets={onUpdateSets} />
      <table className="set-list">
        <tbody>
          {sets.namedSets.mapEntries(([name]) => [name, (
            <NamedSetManager key={name} sets={sets} name={name} onUpdateSets={onUpdateSets} />
          )]).toSet().toArray()}
        </tbody>
      </table>
    </div>
  );
}
