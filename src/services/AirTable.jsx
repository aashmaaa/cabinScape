import { useAirtable } from "./useAirtable";

const Airtable = () => {
  const { airTable, isLoading, error } = useAirtable();
  console.log(airTable.records);
  const records = airTable.records;
  return (
    <div>
      <div>
        {records.map((record, index) => (
          <p key={record.id}>{record.fields.Phone}</p>
        ))}
      </div>
    </div>
  );
};

export default Airtable;
