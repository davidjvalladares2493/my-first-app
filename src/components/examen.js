import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ setPhoneBook, phoneBook }) {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const addingContact = (e) => {
    e.preventDefault();
    let orderedPhoneBook = [
      ...phoneBook,
      {
        name,
        lastname,
        phone,
      }
    ];
    orderedPhoneBook = orderedPhoneBook.sort((previousContact, currentContact) => {
      if(previousContact.lastname < currentContact.lastname) {
        return -1;
      }
      if(previousContact.lastname < currentContact.lastname) {
        return 1;
      }
      return 0;
    });
    setPhoneBook(orderedPhoneBook);
  }

  return (
    <form onSubmit={(e) => addingContact(e)} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        onChange={e => setLastname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        onChange={e => setPhone(e.target.value)}
      />
      <br/>
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable({phoneBook}) {

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBook.map(({name, lastname, phone}) =>
          (<tr key={`${name}${lastname}${phone}`}>
            <td style={style.tableCell}>{name}</td>
            <td style={style.tableCell}>{lastname}</td>
            <td style={style.tableCell}>{phone}</td>
          </tr>)
        )}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [phoneBook, setPhoneBook] = useState([]);

  return (
    <section>
      <PhoneBookForm phoneBook={phoneBook} setPhoneBook={setPhoneBook} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
