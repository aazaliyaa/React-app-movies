import React from 'react';
import PropTypes from "prop-types";
import { InputText, TextArea, Button, Select, DateInput } from './../../components'
import { CloseButton } from './../../images/icons';
import { genre } from './../../components/constants';
import styles from './AddMovie.module.css';
  
const AddMovie = ({ onClick }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div onClick={onClick} className={styles.close}>
          <span className={styles.closeButton}><CloseButton/></span>
        </div>
        <p className={styles.title}>add movie</p>
        <div className={styles.inputs__block}>
          <InputText
            label='title'
            containerClass={styles.input__container}
            placeholder='Moana'
          />
          <DateInput
            label='release date'
            containerClass={styles.input__container}
          />
          <InputText
            label='movie url'
            containerClass={styles.input__container}
            placeholder='https://'
          />
          <InputText
            label='rating'
            inputClass={styles.rightInputs}
            containerClass={styles.input__container}
            placeholder='7.8'
          />
          <Select
            label='genre'
            options={genre}
            containerClass={styles.select__container}
            selectClass={styles.select}
            arrowClass={styles.select__arrow}
          />
          <InputText
            label='runtime'
            inputClass={styles.rightInputs}
            containerClass={styles.input__container}
            placeholder='minutes'
          />
        </div>
        <TextArea
          label='overview'
          containerClass={styles.input__container}
          placeholder='Movie description'
        />
        <div className={styles.buttons}>
          <Button value='reset'  buttonClass={styles.reset}/>
          <Button value='submit' buttonClass={styles.submit} />
        </div>
      </div>
    </div>
  );
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};
  
export { AddMovie };