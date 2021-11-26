import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep4 = () => {
    const navegate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navegate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const completionAlert = () => {
        alert("Cadastro Finalizado com sucesso");
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>{state.name}, chegou a hora de verificar os seus dados</h1>
                <p>Verifique se todos os dados inseridos estão corretos antes de finalizar.</p>

                <hr />

                <p>O seu nome é <b>{state.name}</b></p>
                <p>Você encontra-se no nível <b>{state.level === 0 ? 'Sou iniciante' : state.level === 1 ? 'Consigo me virar' : 'Sou programador'}</b></p>
                <p>Seu e-mail para contato é o "<b>{state.email}</b>"</p>
                <p>Este é o seu repositório do git "<b>{state.github}</b>"</p>
                <p>É aqui neste link "<b>{state.linkedin}</b>" que podemos encontrar você no LinkedIn</p>


                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={completionAlert}><a href='/'>Finalizar Cadastro</a></button>
            </C.Container>
        </Theme>
    );
}
