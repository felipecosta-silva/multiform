import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const navegate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navegate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha o seu E-mail e GitHub");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLinkedin,
            payload: e.target.value
        });
    }



    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, como podemos te encontrar?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <label>
                    Qual seu LinkedIn?
                    <input
                        type="url"
                        value={state.linkedin}
                        onChange={handleLinkedinChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}