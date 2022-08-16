import { View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';
import { formStyle } from '../../styles';
import useAuth from '../../hooks/useAuth';

export default function RegisterForm(props) {
  const { changeForm } = props;

  const [loading, setloading] = useState(false);

  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log('Login enviado', formData);
            setloading(true);
            try {
          
                const response = {"email": "kbj@gmail.com","password":"1234"}
                login(response);
          
            } catch (error) {
                setloading(false);
                Toast.show("Invalid Form", {
                    position: Toast.positions.CENTER,
                });
            }
        },
  });

  return (
    <View>
        <TextInput label="Email" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("email", text)} value={formik.values.email} error={formik.errors.email} />
        <TextInput label="Contraseña" style={formStyle.input} secureTextEntry onChangeText={(text) => formik.setFieldValue("password", text)} value={formik.values.password} error={formik.errors.password} />

        <Button mode='contained' style={formStyle.btnSuccesRed} textStyle={{ color: "#FFFFFF" }} onPress={formik.handleSubmit} loading={loading}>Login</Button>

        <Button mode='text' textStyle={{ color: "#FFFFFF" }} color="#f18485" onPress={changeForm}>Registrarse</Button>
    </View>
  )
}

function initialValues() {
    return {
        email: "",
        password: ""
    }
}

function validationSchema () {
    return {
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    }
}