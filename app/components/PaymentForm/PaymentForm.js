import PaymentCard from 'react-payment-card-component'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, change, dispatch } from 'redux-form'
import TextField from './TextField'
import SelectField from './SelectField'
import HiddenField from './HiddenField'
import normalizeZip from './normalizeZip'
import normalizeCardNumber from './normalizeCardNumber'
import normalizeCVC from './normalizeCVC'
import normalizeExpiry from './normalizeExpiry'

let creditCardType = require('credit-card-type')
let classNames = require('classnames')

const required = (value) =>  {
    if (value) {
        return undefined
    }
    return 'Erro: Este campo é obrigatório'
}

class PaymentForm extends React.Component {
    constructor(props) {
        super(props)
        this.changeAdr = this.changeAdr.bind(this)
    }

    changeAdr(kind) {
        this.props.dispatch(change('paymentform', 'address_kind', kind))
    }

    render() {
        var { handleSubmit, submitting, cardType, address_kind, number, name, expiry, cvc, submitFailed } = this.props

        let buttonKindAddressClasses = {
            'btn': true,
            'btn-block': true,
            'address_kind_choice': true,
        }
        let buttonSame = {
            'btn-default': address_kind === 'different',
            'btn-success': address_kind === 'same',
        }
        let buttonDiff = {
            'btn-success': address_kind === 'different',
            'btn-default': address_kind === 'same',
        }
        let buttonSameClasses = classNames(Object.assign({}, buttonKindAddressClasses, buttonSame))
        let buttonDiffClasses = classNames(Object.assign({}, buttonKindAddressClasses, buttonDiff))

        return (
            <form className="payment_form form form-inline" method="post" role="form" onSubmit={ handleSubmit }>
                {submitFailed && <div className="alert_panel clearfix alert alert-default alert-dismissible" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="col-xs-12 col-md-8">
                        <ul className="error_list">
                            <li className="error_list__item" aria-hidden="true">
                                <span className="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
                                Preenchimento obrigatório
                            </li>
                        </ul>
                        <h3 className="alert_panel__title">Falha ao processar os dados do cartão.</h3>
                        <div className="alert_panel__text">
                            <p>
                                Verifique se as informações do seu cartão de crédito estão corretas (Nome, Número, Data de
                                Validade, Código de Segurança).
                                Se o problema persistir você pode usar outro cartao de crédito ou escolher como forma de
                                pagamento o boleto bancário.
                                Ou então, se preferir, entre em contato com o seu banco ou administradora de cartão de
                                crédito e tente realizar a compra novamente.
                            </p>
                        </div>
                    </div>
                </div>}
                <div className="col-xs-12 col-md-8 fieldset_group">
                    <h3 className="fieldset_group__title">Pagamento</h3>
                    <fieldset className="fieldset address_kind">
                        <legend className="fieldset__legend">Endereço da cobrança</legend>
                        <Field name="address_kind"
                            id="address_kind"
                            value={address_kind}
                            component={HiddenField} />
                        <div className="row">
                            <div className="col-xs-12 col-md-5">
                                <button type="button" className={buttonSameClasses} onClick={() => this.changeAdr('same')}>
                                    É o mesmo da entrega
                                </button>
                            </div>
                            <div className="col-xs-12 col-md-5 pleft0">
                                <button type="button" className={buttonDiffClasses} onClick={() => this.changeAdr('different')}>
                                    É diferente da entrega
                                </button>
                            </div>
                        </div>
                    </fieldset>
                    {address_kind === 'different' && <div>
                        <fieldset className="fieldset fieldset__fluid address_zip">
                            <legend className="fieldset__legend">Qual o seu CEP de cobrança?</legend>
                            <div className="form-row row align-items-center">
                                <div className="col-xs-12 col-md-6">
                                    <Field label="CEP"
                                           name="zip"
                                           id="zip"
                                           type="text"
                                           validate={[ required ]}
                                           placeholder="__.___-___"
                                           normalize={normalizeZip}
                                           component={TextField} />
                                </div>
                                <div className="col-xs-12 col-md-6 pleft0">
                                    <a href="#" className="idont_know_zip">Não sei meu CEP</a>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset fieldset__fluid address_different">
                            <legend className="fieldset__legend">Confirme seu endereço de cobrança</legend>
                            <div className="form-row row align-items-center">
                                <div className="col-xs-12 col-md-7">
                                    <Field label="Logradouro"
                                           name="street_address"
                                           id="street_address"
                                           type="text"
                                           validate={[ required ]}
                                           component={TextField} />
                                </div>
                                <div className="col-xs-12 col-md-5 pleft0">
                                    <Field label="Número"
                                           name="number_address"
                                           id="number_address"
                                           type="text"
                                           component={TextField} />
                                </div>
                            </div>
                            <div className="form-row row">
                                <div className="col-xs-12 col-md-9">
                                    <Field label="Complemento"
                                           name="complement"
                                           id="complement"
                                           type="text"
                                           component={TextField} />
                                </div>
                                <div className="col-xs-12 col-md-3 pleft0">
                                    <Field label="UF"
                                           name="state"
                                           id="state"
                                           searchable={false}
                                           validate={[ required ]}
                                           options={[
                                               { value: 'AC', label: 'AC' },
                                               { value: 'AL', label: 'AL' },
                                               { value: 'AP', label: 'AP' },
                                               { value: 'AM', label: 'AM' },
                                               { value: 'BA', label: 'BA' },
                                               { value: 'CE', label: 'CE' },
                                               { value: 'DF', label: 'DF' },
                                               { value: 'ES', label: 'ES' },
                                               { value: 'GO', label: 'GO' },
                                               { value: 'MA', label: 'MA' },
                                               { value: 'MT', label: 'MT' },
                                               { value: 'MS', label: 'MS' },
                                               { value: 'MG', label: 'MG' },
                                               { value: 'PA', label: 'PA' },
                                               { value: 'PB', label: 'PB' },
                                               { value: 'PR', label: 'PR' },
                                               { value: 'PE', label: 'PE' },
                                               { value: 'PI', label: 'PI' },
                                               { value: 'RJ', label: 'RJ' },
                                               { value: 'RN', label: 'RN' },
                                               { value: 'RS', label: 'RS' },
                                               { value: 'RO', label: 'RO' },
                                               { value: 'RR', label: 'RR' },
                                               { value: 'SC', label: 'SC' },
                                               { value: 'SP', label: 'SP' },
                                               { value: 'SE', label: 'SE' },
                                               { value: 'TO', label: 'TO' },
                                           ]}
                                           component={SelectField} />
                                </div>
                            </div>
                            <div className="form-row row">
                                <div className="col-xs-12 col-md-6">
                                    <Field label="Cidade"
                                           name="city"
                                           id="city"
                                           searchable={false}
                                           validate={[ required ]}
                                           options={[
                                               { value: 'Campina Grande', label: 'Campina Grande' },
                                               { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
                                               { value: 'São Paulo', label: 'São Paulo' },
                                           ]}
                                           component={SelectField} />
                                </div>
                            </div>
                        </fieldset>
                    </div>}
                    <fieldset className="fieldset fieldset__fluid credit-card">
                        <legend className="fieldset__legend">Dados do cartão</legend>

                        <div className="credit-card-wrapper">
                            <PaymentCard
                                bank="default"
                                model="normal"
                                type="black"
                                brand={cardType}
                                number={number}
                                cvv={cvc}
                                holderName={name}
                                expiration={expiry}
                                flipped={false}
                            />
                        </div>

                        <div className="form-row row align-items-center">
                            <div className="col-xs-12 col-md-5">
                                <Field label="Número"
                                       name="number"
                                       id="number"
                                       type="text"
                                       validate={[ required ]}
                                       placeholder="____ ____ ____ ____"
                                       normalize={normalizeCardNumber}
                                       component={TextField} />
                            </div>
                            <div className="col-xs-12 col-md-7">
                                <Field label="Nome Completo"
                                       name="name"
                                       id="name"
                                       type="text"
                                       maxLength={21}
                                       validate={[ required ]}
                                       component={TextField} />
                            </div>
                        </div>
                        <div className="form-row row">
                            <div className="col-xs-12 col-md-6">
                                <Field label="Validade"
                                       name="expiry"
                                       id="expiry"
                                       type="text"
                                       validate={[ required ]}
                                       placeholder="__/____"
                                       normalize={normalizeExpiry}
                                       component={TextField} />
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <Field label="Código de Segurança"
                                       name="cvc"
                                       id="cvc"
                                       type="text"
                                       validate={[ required ]}
                                       normalize={normalizeCVC}
                                       component={TextField} />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset fieldset__fluid amount">
                        <legend className="fieldset__legend">Valor e parcelamento</legend>
                        <div className="form-row row">
                            <div className="col-xs-12 col-md-6">
                                <Field name="amount"
                                       id="amount"
                                       searchable={false}
                                       validate={[ required ]}
                                       options={[
                                           { value: '1', label: '1 x R$ 660,00' },
                                           { value: '2', label: '2 x R$ 330,00' },
                                           { value: '3', label: '3 x R$ 220,00' },
                                           { value: '4', label: '4 x R$ 165,00' },
                                           { value: '5', label: '5 x R$ 132,00' },
                                       ]}
                                       component={SelectField} />
                            </div>
                        </div>
                    </fieldset>

                    <div className="form_buttons">
                        <a href="#" className="btn btn-default btn-return">
                            <i className="glyphicon glyphicon-triangle-left" aria-hidden="true"></i>
                            <span>
                            Voltar
                        </span>
                        </a>
                        <button type="submit" className="btn btn-success pull-right" disabled={submitting}>
                            Finalizar Compra
                        </button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <h3>Detalhes da Compra</h3>
                </div>
            </form>
        )
    }
}

// Decorate with redux-form
PaymentForm = reduxForm({
    form: 'paymentform',
    initialValues: {
        address_kind: 'same'
    }
})(PaymentForm)

const selector = formValueSelector('paymentform')

PaymentForm = connect((state) => {
    let name = selector(state, 'name')
    var submitFailed = state.form.paymentform ? state.form.paymentform.submitFailed : false;
    let { number, expiry, cvc, address_kind } = selector(state, 'number', 'expiry', 'cvc', 'address_kind')
    var cardSearch = undefined
    var cardType = undefined
    if(number !== undefined) {
        cardSearch = creditCardType(number.slice(0,4));
        cardType = cardSearch.length > 0 ? cardSearch[0].niceType.toLowerCase() : undefined;
    }
    name = name !== undefined ? name.toUpperCase() : undefined

    return {
        address_kind,
        cardType,
        number,
        name,
        expiry,
        cvc,
        submitFailed
    }
})(PaymentForm)

export default PaymentForm