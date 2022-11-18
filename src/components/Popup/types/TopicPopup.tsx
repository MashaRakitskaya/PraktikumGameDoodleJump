import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { InputLabel, InputNames, InputType } from '../../../constans/constans';
import { IPostTopicParams } from '../../../models/IForum';
import { useFetchUserQuery } from '../../../services/auth';
import { useFetchPostTopicMutation } from '../../../services/forum';
import { topicSchema } from '../../../utils/validationSchema/schemaTopic';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import Popup from '../Popup';

interface TopicPopupProps {
  showPopup: boolean;
  togglePopup: (arg: boolean) => void;
}

const TopicPopup = ({ showPopup, togglePopup }: TopicPopupProps) => {
  const { data: user } = useFetchUserQuery();
  const [fetchPostTopic, { isError }] = useFetchPostTopicMutation();

  const formik = useFormik<IPostTopicParams>({
    initialValues: {
      [InputNames.topic]: '',
      user_id: user?.id,
      //@ts-ignore
      user_second_name: user?.second_name
    },
    validationSchema: topicSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      fetchPostTopic(values);
      resetForm();
      togglePopup(false);
    }
  });

  useEffect(() => {
    if (isError) {
      alert('TOPIC CREATION ERROR');
    }
  }, [isError]);

  return (
    <Popup
      isOpen={showPopup}
      title={'Create topic'}
      closePopup={() => togglePopup(false)}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name={InputNames.topic}
          labelName={InputLabel.topic}
          type={InputType.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.topic}
          errorText={formik.touched.topic && formik.errors.topic}
          disabled={formik.isSubmitting}
        />
        <Button buttonText="Create" type="submit" />
      </form>
    </Popup>
  );
};

export default TopicPopup;
