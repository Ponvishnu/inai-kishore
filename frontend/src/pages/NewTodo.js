import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateClick = () => {
    navigate('/calendar');
  };

  return (
    <div className="page-container">
      <svg 
        className="back-button" 
        viewBox="0 0 20 20" 
        fill="#ffffff"
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }}
      >
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>

      <h1 className="page-title">New Todo</h1>

      <div className="input-group" style={{ marginTop: '30px' }}>
        <label className="label">Title</label>
        <input
          type="text"
          className="glass"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            height: '49px',
            borderRadius: '15px',
            padding: '0 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none'
          }}
        />
      </div>

      <div className="input-group">
        <label className="label">Description</label>
        <textarea
          className="glass"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{
            width: '100%',
            borderRadius: '15px',
            padding: '15px 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none',
            resize: 'none'
          }}
        />
      </div>

      <div className="input-group">
        <label className="label">Date</label>
        <div className="glass" style={{ 
          width: '100%', 
          height: '49px', 
          borderRadius: '15px', 
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }} onClick={handleDateClick}>
          <span style={{ color: date ? '#ffffff' : '#AEAEAE', fontSize: '15px' }}>
            {date || 'mm/dd/yyyy'}
          </span>
          <svg style={{ width: '19px', height: '20px' }} viewBox="0 0 20 20" fill="#AEAEAE">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="input-group">
        <label className="label">Time</label>
        <input
          type="time"
          className="glass"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            width: '100%',
            height: '49px',
            borderRadius: '15px',
            padding: '0 20px',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: 'Poppins, sans-serif',
            border: 'none',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '410px' }}>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default NewTodo;
