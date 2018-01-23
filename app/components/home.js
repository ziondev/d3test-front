import React from 'react';

const Header = () =>
    <header className="navbar navbar-default" role="banner">
        <div className="container">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <h1 className="navbar__title">EXP_</h1>
                </div>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a className="navbar__profile" href="#">Karol com 5K_</a></li>
            </ul>
        </div>
    </header>;

const Footer = () =>
    <footer className="navbar navbar-inverse" role="content-info">
        <div className="container">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <div className="navbar__title">EXP_</div>
                </div>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a className="navbar__profile" href="#">Karol com 5K_</a></li>
            </ul>
        </div>
    </footer>;

const Form = () =>
    <form className="payment_form form-inline">
        <div className="alert alert-default alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
            <ul className="payment_form__error_list">
                <small>
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    Preenchimento obrigatório
                </small>
            </ul>
            <h3>Falha ao processar os dados do cartão</h3>
            <p>
                Verifique se as informações do seu cartão de crédito estão corretas (Nome, Número, Data de Validade, Código de Segurança).
                Se o problema persistir você pode usar outro cartao de crédito ou escolher como forma de pagamento o boleto bancário.
                Ou então, se preferir, entre em contato com o seu banco ou administradora de cartão de
                crédito e tente realizar a compra novamente.
            </p>
        </div>
        <div className="col-md-8">
            <h3>Pagamento</h3>
            <fieldset>
                <legend>Endereço da cobrança</legend>
                <input type="hidden" name="address_kind" value="same" />
                <button type="button" className="btn btn-success">
                    É o mesmo da entrega
                </button>
                <button type="button" className="btn btn-default">
                    É diferente da entrega
                </button>
            </fieldset>
            <fieldset>
                <legend>Qual o seu CEP de cobrança?</legend>
                <div className="form-group has-error has-feedback">
                    <label htmlFor="zip" className="control-label">CEP</label>
                    <input type="text" name="zip" id="zip" className="form-control" aria-label="Erro: Este campo é obrigatório" />
                    <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                </div>
                <a href="#">Não sei meu CEP</a>
            </fieldset>
            <fieldset>
                <legend>Confirme seu endereço de cobrança</legend>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="street_address" className="control-label">Logradouro</label>
                        <input type="text" name="street_address" id="street_address" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number" className="control-label">Número</label>
                        <input type="text" name="number" id="number" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="complement" className="control-label">Complemento</label>
                        <input type="text" name="complement" id="complement" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="control-label">UF</label>
                        <select name="state" id="state" className="form-control" aria-describedby="">
                            <option value="">SELECIONE</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Rorâima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city" className="control-label">Cidade</label>
                        <input type="text" name="city" id="city" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Dados do cartão</legend>

                cartão

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="number" className="control-label">Número</label>
                        <input type="text" name="number" id="number" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">Nome Completo</label>
                        <input type="text" name="name" id="name" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiry" className="control-label">Validade</label>
                        <input type="text" name="expiry" id="expiry" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvc" className="control-label">Código de Segurança</label>
                        <input type="text" name="cvc" id="cvc" className="form-control" aria-label="" />
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Valor e parcelamento</legend>
                <div className="form-row">
                    <div className="form-group">
                        <select name="amount" id="amount" className="form-control" aria-label="">
                            <option value="1">1 x R$ 660,00</option>
                            <option value="2">2 x R$ 330,00</option>
                            <option value="3">3 x R$ 220,00</option>
                            <option value="4">4 x R$ 165,00</option>
                            <option value="5">5 x R$ 132,00</option>
                        </select>
                        <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>
                    </div>
                </div>
            </fieldset>

            <div className="form_buttons">
                <a href="#" className="btn btn-default">
                    <i className="glyphicon glyphicon-triangle-left" aria-hidden="true"></i>
                    Voltar
                </a>
                <a href="#" className="btn btn-success pull-right">
                    Finalizar Compra
                </a>
            </div>
        </div>
        <div className="col-md-4">
            <h3>Detalhes da Compra</h3>
        </div>
    </form>;

const Home = () =>
    <div className="">
        <Header />
        <div role="main" className="clearfix">
            <h2>Cadastro</h2>
            <div className="step" aria-label="Passos da Compra">
                <a className="step__item" aria-label="Passo 1">1</a>
                <a className="step__item" aria-label="Passo 2">2</a>
                <a className="step__item" aria-label="Passo 3">3</a>
                <a className="step__item step__active" aria-label="Passo 4: você está aqui">
                    4
                </a>
            </div>
            <Form />
        </div>
        <Footer />
    </div>;

export default Home;
