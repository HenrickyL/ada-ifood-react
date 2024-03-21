import { useFormik } from "formik";
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { LoginSty } from "./style"
import { IoMdMail as MailIcon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useAuth } from "../../_hooks/auth";

interface LoginFormEntry{
    email: string;
    password: string;
}

const requiredField = 'Campo obrigatório';

const validationSchema = Yup.object().shape({
    email: Yup.string().required(requiredField).email('E-mail inválido'),
    password: Yup.string().required(requiredField).min(4).max(16),
});

export const Login = ()=>{
    const navigate = useNavigate();
    const {logIn: signIn} = useAuth()

    const form = useFormik<LoginFormEntry>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (value, {setFieldError}) => {
           try {
            await signIn(value)
            navigate('/');
           } catch (ex) {
                setFieldError('password', 'Usuário inválido');
           }
        }
    });

    return(
        <LoginSty>
            <main>
                <Form.Root form={form}>
                    <Form.Title text="Login"/>
                    <Input.Root>
                        <Input.Field error={form.errors.email}> 
                            <Input.Icon icon={MailIcon}/>
                            <Input.Input
                                name="email" 
                                type="email" 
                                placeholder="Email"/>
                        </Input.Field>
                    </Input.Root>

                    <Input.Root>
                        <Input.Field error={form.errors.password}>
                            <Input.Password 
                                name="password"
                                placeholder="Password"/>
                        </Input.Field>
                    </Input.Root>
                    <Input.Button 
                        onClick={form.submitForm}
                        text="Entrar" 
                        type="submit"/>
                    <Form.Field>
                        <Form.Link text="Cadastrar?" to="/signin"/>
                    </Form.Field>
                </Form.Root>
            </main>
        </LoginSty>
    )
}