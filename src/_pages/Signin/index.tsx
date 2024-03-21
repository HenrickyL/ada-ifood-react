import { useNavigate } from "react-router-dom";
import { SigninSty } from "./style"
import * as Yup from 'yup'
import { useAuth } from "../../_hooks/auth";
import { useFormik } from "formik";
import { Form } from "../../_components/Form";
import { Input } from "../../_components/Input";
import { IoMdMail as MailIcon } from "react-icons/io";
import { FaUser as UsernameIcon } from "react-icons/fa";



interface SigninFormEntry{
    username: string;
    email: string;
    password: string;
}

const requiredField = 'Campo obrigatório';

const validationSchema = Yup.object().shape({
    username: Yup.string().required(requiredField).min(4).max(16),
    email: Yup.string().required(requiredField).email('E-mail inválido'),
    password: Yup.string().required(requiredField).min(4).max(16),
});
export const Signin = ()=>{
    const navigate = useNavigate();
    const {signIn} = useAuth()

    const form = useFormik<SigninFormEntry>({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (value, {setFieldError}) => {
           try {
            await signIn(value)
            navigate('/login');
           } catch (ex) {
                setFieldError('password', 'Usuário inválido');
           }
        }
    });

    return(
        <SigninSty>
            <main>
                <Form.Root form={form}>
                    <Form.Title text="Signin"/>

                    <Input.Root>
                        <Input.Field error={form.errors.email}> 
                            <Input.Icon icon={UsernameIcon}/>
                            <Input.Input
                                name="username" 
                                type="text" 
                                placeholder="Username"/>
                        </Input.Field>
                    </Input.Root>

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
                        text="Cadastrar" 
                        type="submit"/>
                    <Form.Field>
                        <Form.Link text="Entrar?" to="/login"/>
                    </Form.Field>
                </Form.Root>
            </main>
        </SigninSty>
    )
}