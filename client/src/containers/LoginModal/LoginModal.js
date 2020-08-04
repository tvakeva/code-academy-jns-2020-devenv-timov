import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { Formik, Form, Field } from "formik";

import * as sessionActions from "../../common/actions/sessionActions";

const LoginModal = function (props) {
  const { login, getSession, logout, userId } = props;
  useEffect(() => {
    if (!userId) {
      getSession();
    }
  }, [userId]);
  const onSubmit = (formData, { setSubmitting }) => {
    login(formData)
      .then(() => getSession())
      .finally(() => setSubmitting(false));
  };
  return (
    <React.Fragment>
      {userId && (
        <Button className="button-logout-main" onClick={() => logout()}>
          Logout
        </Button>
      )}
      <Modal id="modal-login-main" isOpen={!userId}>
        <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
          {({ isSubmitting, submitForm }) => (
            <React.Fragment>
              <ModalHeader>Login</ModalHeader>
              <ModalBody>
                <Form>
                  <div>
                    <Label for="email">Email</Label>
                    <Field as={Input} name="email" />
                  </div>
                  <div>
                    <Label for="password">Password</Label>
                    <Field as={Input} type="password" name="password" />
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => submitForm()} disabled={isSubmitting}>
                  Login
                </Button>
              </ModalFooter>
            </React.Fragment>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  );
};

export default connect(
  (store) => ({ ...store.session }),
  (dispatch) => bindActionCreators(sessionActions, dispatch)
)(LoginModal);
