import { useFormik } from "formik";
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { LoginSty } from "./style"
import { IoMdMail as MailIcon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useAuth } from "../../_hooks/auth";
import { useNotificationStore } from "../../_stores/notification";
import { FaExclamationCircle as ErrorIcon} from "react-icons/fa";

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
    const {logIn} = useAuth()
    const {addNotification} = useNotificationStore()

    const form = useFormik<LoginFormEntry>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (value) => {
           try {
            await logIn(value)
            navigate('/');
           } catch (ex) {
                addNotification({
                    message: 'Erro ao fazer login. Verifique suas credenciais e tente novamente.',
                    type: 'error',
                    icon: ErrorIcon
                })
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