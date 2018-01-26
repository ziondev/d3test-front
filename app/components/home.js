import React from 'react';
import PaymentForm from './PaymentForm/PaymentForm';

const Header = () =>
    <header className="header navbar navbar-default" role="banner">
        <div className="container">
            <div className="navbar-header pull-left">
                <div className="navbar-brand">
                    <h1 className="navbar__title">EXP_</h1>
                </div>
            </div>
            <a className="navbar-nav navbar-right pull-right navbar__profile" href="#">Karol com 5K_</a>
        </div>
    </header>;

const Footer = () =>
    <footer className="footer navbar navbar-inverse" role="contentinfo">
        <div className="container">
            <div className="navbar-header pull-left">
                <div className="navbar-brand">
                    <div className="navbar__title">EXP_</div>
                </div>
            </div>
            <a className="navbar-nav navbar-right pull-right navbar__profile" href="#">Karol com 5K_</a>
        </div>
    </footer>;

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.submitPaymentForm = this.submitPaymentForm.bind(this);
    }

    submitPaymentForm(values) {
        alert("Submited! :)")
        console.log(values)
    }

    render() {
        return(
            <div className="">
                <Header />
                <div role="main" className="container">
                    <div className="app_intro">
                        <h2 className="app_intro__title">Cadastro</h2>
                        <div className="step clearfix" aria-label="Passos da Compra">
                            <a className="step__item" aria-label="Passo 1">1</a>
                            <a className="step__item" aria-label="Passo 2">2</a>
                            <a className="step__item" aria-label="Passo 3">3</a>
                            <a className="step__item step__active" aria-label="Passo 4: você está aqui">
                                4
                            </a>
                        </div>
                    </div>
                    <PaymentForm onSubmit={this.submitPaymentForm} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
