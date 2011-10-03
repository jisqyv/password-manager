/*

Copyright 2008-2011 Clipperz Srl

This file is part of Clipperz's Javascript Crypto Library.
Javascript Crypto Library provides web developers with an extensive
and efficient set of cryptographic functions. The library aims to
obtain maximum execution speed while preserving modularity and
reusability.
For further information about its features and functionalities please
refer to http://www.clipperz.com

* Javascript Crypto Library is free software: you can redistribute
  it and/or modify it under the terms of the GNU Affero General Public
  License as published by the Free Software Foundation, either version
  3 of the License, or (at your option) any later version.

* Javascript Crypto Library is distributed in the hope that it will
  be useful, but WITHOUT ANY WARRANTY; without even the implied
  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Javascript Crypto Library.  If not, see
  <http://www.gnu.org/licenses/>.

*/

Clipperz.PM.Strings.Languages['pt-BR'.toLowerCase()] = MochiKit.Base.merge(Clipperz.PM.Strings.Languages['en-us'], {
'clipperzServiceDescriptionConfig':	"<h2>Guarde com você!</h2> <ul> <li> <h3>Clipperz é:</h3> <ul> <li> <p>um simples e seguro gerenciador de senhas</p> </li> <li> <p>uma efetiva solução com uma única assinatura</p> </li> <li> <p>um cofre digital para suas informações confidenciais</p> </li> </ul> </li> <li> <h3>Com Clipperz você pode:</h3> <ul> <li> <p>guardar e gerenciar suas senhas e credenciais online</p> </li> <li> <p>logar em seus serviços web sem precisar entrar com nenhum nome de usuário ou senha</p> </li> <li> <p>proteger todos os seus dados sensíveis: códigos de alarme, PINs, números de cartão de crédito, &hellip;</p> </li> <li> <p>compartilhar segredos com membros da família e associados (em breve)</p> </li> </ul> </li> <li> <h3>Clipperz proporciona:</h3> <ul> <li> <p>anonimato completo e gratuito</p> </li> <li> <p>acesso a qualquer hora em qualquer computador</p> </li> <li> <p>sem software ou download e nada que instalar</p> </li> <li> <p>evite guardar seus segredos em seu PC ou papel</p> </li> </ul> </li> <li> <h3>Segurança Clipperz:</h3> <ul> <li> <p>seus segredos são codificados localmente por seu navegador antes de ser enviado para Clipperz</p> </li> <li> <p>a chave de codificação é uma senha que só você conhece</p> </li> <li> <p>Clipperz armazena apenas seus dados confidenciais codificados, nunca acessando os dados originais</p> </li> <li> <p>Clipperz é construído a partir de esquemas de codificação padrão, ou seja, nada é exclusivo ou caseiro</p> </li> <li> <p>você pode revisar o código a qualquer momento, mas você não precisa conhecer nada sobre criptograia para ser um usuário feliz!</p> </li> </ul> </li> <li> <a href=\"http://www.clipperz.com\" target=\"_blank\">Saiba mais</a> </li> </ul> ",
'loginFormTitle':	"entre sua conta Clipperz",
'loginFormUsernameLabel':	"nome do usuário",
'loginFormPassphraseLabel':	"frase chave",
'loginFormDontHaveAnAccountLabel':	"não tem uma conta?",
'loginFormCreateOneLabel':	"criar uma",
'loginFormForgotYourCredentialsLabel':	"esqueceu suas credenciais?",
'loginFormAarghThatsBadLabel':	"xiiiii! isso é não é bom!",
'loginFormAfraidOfMaliciousScriptsLabel':	"medo de scripts maliciosos?",
'loginFormVerifyTheCodeLabel':	"verifique o código",
'loginFormButtonLabel':	"Entrar",
'loginFormOneTimePasswordCheckboxLabel':	"use uma frase chave descartável",
'loginPanelSwithLanguageDescription':	"<h5>Mudar para sua linguagem preferida</h5> ",
'browserCompatibilityDescription':	"<p>Tenha uma experiência melhor e mais segura com Clipperz, utilizando o Firefox. No entanto, Clipperz funciona bem também em Opera e MS Internet Explorer!</p> ",
'OTPloginMessagePanelInitialTitle':	"Acessando usando a frase chave descartável",
'OTPloginMessagePanelInitialText':	"Enviando credenciais descartáveis ...",
'OTPloginMessagePanelLoadingTitle':	"Acessando usando a frase chave descartável",
'OTPloginMessagePanelLoadingText':	"Buscando informação de autenticação codificada no servidor ...",
'OTPloginMessagePanelProcessingTitle':	"Acessando usando a frase chave descartável",
'OTPloginMessagePanelProcessingText':	"Decodificação local da informação de autenticação ...",
'loginMessagePanelInitialTitle':	"Entrando ...",
'loginMessagePanelInitialButtonLabel':	"Cancelar",
'loginMessagePanelConnectedTitle':	"Conectado",
'loginMessagePanelConnectedText':	"Concluído",
'loginMessagePanelFailureTitle':	"Erro",
'loginMessagePanelFailureText':	"Ocorreu uma falha",
'loginMessagePanelFailureButtonLabel':	"Fechar",
'connectionLoginSendingCredentialsMessageTitle':	"Verificando credenciais",
'connectionLoginSendingCredentialsMessageText':	"Enviando credenciais",
'connectionLoginCredentialsVerificationMessageTitle':	"Verificando credenciais",
'connectionLoginCredentialsVerificationMessageText':	"Realizando autenticação SRP",
'connectionLoginDoneMessageTitle':	"Verificando credenciais",
'connectionLoginDoneMessageText':	"Conectado",
'userLoginPanelUpgradingUserCredentialsMessageTitle':	"Verificando credenciais",
'userLoginPanelUpgradingUserCredentialsMessageText':	"Upgrade de suas credenciais para um novo esquema de autenticação",
'userLoginPanelConnectedMessageTitle':	"Usuário autenticado",
'userLoginPanelConnectedMessageText':	"Logado com sucesso em",
'userLoginPanelTryingAnOlderConnectionSchemaMessageTitle':	"Verificando credenciais",
'userLoginPanelTryingAnOlderConnectionSchemaMessageText':	"Tentando esquema antigo de autenticação",
'userLoginPanelLoadingUserDataMessageTitle':	"Usuário autenticado",
'userLoginPanelLoadingUserDataMessageText':	"Baixando cabeçalhos de cartão codificados de Clipperz",
'userLoginPanelDecryptingUserDataMessageTitle':	"Usuário autenticado",
'userLoginPanelDecryptingUserDataMessageText':	"Descrição local de cabeçalhos dos cartões",
'userLoginPanelDecryptingUserStatisticsMessageTitle':	"Usuário autenticado",
'userLoginPanelDecryptingUserStatisticsMessageText':	"Descrição local de estatísticas de uso",
'splashAlertTitle':	"Bem-vindo ao Clipperz!",
'splashAlertText':	"<p>Alguns avisos de segurança</p> <ul> <li> <p>Guardar suas informações no Clipperz é tão seguro quanto a frase chave que você escolher para protege-los. Ninguém pode acessá-los sem essa frase chave.</p> </li> <li> <p>Se você vai utlizar Clipperz para armazenar suas informações confidenciais e críticas, escolha uma frase chave difícil de ser descoberta. Quanto mais longa, melhor!</p> </li> <li> <p>Clipperz não será capaz de recuperar frase chave perdidas!</p> </li> </ul> <p>Para mais informações, por favor vá até <a href=\"http://www.clipperz.com\" target=\"_blank\">Clipperz</a> website.</p> ",
'splashAlertCloseButtonLabel':	"Ok",
'registrationFormTitle':	"crie sua conta",
'registrationFormUsernameLabel':	"nome do usuário",
'registrationFormPassphraseLabel':	"frase chave",
'registrationFormRetypePassphraseLabel':	"entre novamente sua frase chave",
'registrationFormSafetyCheckLabel':	"Eu compreendo que Clipperz não será capaz de recuperar senhas perdidas.",
'registrationFormTermsOfServiceCheckLabel':	"Eu li e concordo com os <a href='http://www.clipperz.com/terms_of_service' target='_blank'>Termos do Serviço</a>.",
'registrationFormDoYouAlreadyHaveAnAccountLabel':	"você já tem uma conta?",
'registrationFormSimplyLoginLabel':	"login simples",
'registrationFormButtonLabel':	"Registrar",
'registrationFormWarningMessageNotMatchingPassphrases':	"Suas frases chaves não conferem, por favor tente novamente.",
'registrationFormWarningMessageSafetyCheckNotSelected':	"Por favor leia e confira todos os campos abaixo.",
'registrationFormWarningMessageTermsOfServiceCheckNotSelected':	"Você precisa concordar com os Termos do Serviço.",
'registrationMessagePanelInitialTitle':	"Criando conta ...",
'registrationMessagePanelInitialText':	"---",
'registrationMessagePanelInitialButtonLabel':	"Cancelar",
'registrationMessagePanelRegistrationDoneTitle':	"Registro",
'registrationMessagePanelRegistrationDoneText':	"Concluído",
'registrationMessagePanelFailureTitle':	"Registrou falhou",
'registrationMessagePanelFailureButtonLabel':	"Fechar",
'connectionRegistrationSendingRequestMessageText':	"Verificando credenciais",
'connectionRegistrationSendingCredentialsMessageText':	"Enviando credenciais",
'registrationSplashPanelTitle':	"Informe de segurança",
'registrationSplashPanelDescription':	"<p>Essas são suas credenciais Clipperz, cuide delas com cuidado. Clipperz nunca vai mostrar seu nome de usuário e frase chave uma outra vez!</p> ",
'registrationSplashPanelUsernameLabel':	"nome de usuário",
'registrationSplashPanelPassphraseLabel':	"frase chave",
'registrationSplashPanelShowPassphraseButtonLabel':	"mostrar frase chave",
'donateHeaderLinkLabel':	"doar",
'creditsHeaderLinkLabel':	"créditos",
'feedbackHeaderLinkLabel':	"feedback",
'helpHeaderLinkLabel':	"ajuda",
'forumHeaderLinkLabel':	"fórum",
'recordMenuLabel':	"cartões",
'accountMenuLabel':	"conta",
'dataMenuLabel':	"dados",
'contactsMenuLabel':	"contatos",
'toolsMenuLabel':	"ferramentas",
'logoutMenuLabel':	"sair",
'lockMenuLabel':	"bloquear",
'lockTitle':	"A conta está bloqueada",
'lockDescription':	"<p>Para desbloquear sua conta, por favor, entre com a frase chave</p> ",
'unlockButtonLabel':	"desbloquear",
'changePasswordTabLabel':	"Alterar sua frase chave",
'changePasswordTabTitle':	"Alterar sua frase chave",
'changePasswordFormUsernameLabel':	"nome de usuário",
'changePasswordFormOldPassphraseLabel':	"frase chave antiga",
'changePasswordFormNewPassphraseLabel':	"frase chave nova",
'changePasswordFormRetypePassphraseLabel':	"re-inserir frase chave nova",
'changePasswordFormSafetyCheckboxLabel':	"Eu compreendo que Clipperz não poderá recuperar a frase chave perdida.",
'changePasswordFormSubmitLabel':	"Alterar frase chave",
'changePasswordFormWrongUsernameWarning':	"Nome de usuário errado",
'changePasswordFormWrongPassphraseWarning':	"Frase chave errada",
'changePasswordFormWrongRetypePassphraseWarning':	"Suas frases chaves não conferem, por favor tente novamente.",
'changePasswordFormSafetyCheckWarning':	"Por favor leia e confira todos os campos abaixo.",
'changePasswordFormProgressDialogTitle':	"Alterando credenciais do usuário",
'changePasswordFormProgressDialogConnectedMessageTitle':	"Conectado",
'changePasswordFormProgressDialogConnectedMessageText':	"Concluído",
'changePasswordFormProgressDialogErrorMessageTitle':	"Erro",
'changePasswordFormProgressDialogErrorMessageText':	"Mudança de credenciais falhou!",
'changeCredentialsPanelEncryptingDataMessageTitle':	"Alterando sua frase chave",
'changeCredentialsPanelEncryptingDataMessageText':	"Codificação local de cabeçalho de cartões",
'changeCredentialsPanelCreatingNewCredentialsMessageTitle':	"Alterando sua frase chave",
'changeCredentialsPanelCreatingNewCredentialsMessageText':	"Atualizando suas credenciais",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageTitle':	"Alterando sua frase chave",
'changeCredentialsPanelSendingNewCredentialsToTheServerMessageText':	"Enviando suas credenciais codificadas para Clipperz",
'changeCredentialsPanelDoneMessageTitle':	"Alterando sua frase chave",
'changeCredentialsPanelDoneMessageText':	"Concluído",
'manageOTPTabLabel':	"Gerenciar suas frases chaves descartáveis",
'manageOTPTabTitle':	"Gerenciar suas frases chaves descartáveis",
'manageOTPTabDescription':	"<p>Uma frase chave descartável funciona como uma frase chave normal, mas só pode ser utilizada uma única vez.</p> <p>Se a mesma frase chave for utilizada novamente num próximo login, ela será rejeitada e o login não irá ocorrer.</p> <p>Imediatamente após um login com sucesso, sua frase chave descartável será apagada para evitar logins fraudulentos.</p> <p>Frases chaves descartáveis são uma excelente opção se você está preocupado com keyloggers ou spywares que podem estar coletando seus dados em determinadas máquinas.</p> <p> <b>É recomendável que você utilize frases chaves descartáveis sempre que utilizar terminais públicos como Internet cafés e bibliotecas.</b> </p> ",
'oneTimePasswordReadOnlyMessage':	"<h6>Desculpe!</h6> <p>Você não pode gerenciar sua frase chave descartável quando usando a versão offline do Clipperz.</p> ",
'oneTimePasswordLoadingMessage':	"<h6>Carregando informação</h6> <p>Por favor, aguarde ...</p> ",
'oneTimePasswordNoPasswordAvailable':	"<h6>Nenhuma frase chave descartável disponível</h6> <p>Clique o botão “Novo” acima para adicionar uma frase chave descartável em sua conta.</p> ",
'createNewOTPButtonLabel':	"Novo",
'deleteOTPButtonLabel':	"Apagar",
'printOTPButtonLabel':	"Imprimir",
'disabledOneTimePassword_warning':	"desativada",
'oneTimePasswordSelectionLink_selectLabel':	"Selecionar:",
'oneTimePasswordSelectionLink_all':	"tudo",
'oneTimePasswordSelectionLink_none':	"nenhum",
'oneTimePasswordSelectionLink_used':	"usado",
'oneTimePasswordSelectionLink_unused':	"não usado",
'saveOTP_encryptUserDataTitle':	"Salvando a frase chave descartável",
'saveOTP_encryptUserDataText':	"Processando novas credenciais descartáveis ...",
'saveOTP_encryptOTPDataTitle':	"Salvando a frase chave descartável",
'saveOTP_encryptOTPDataText':	"Codificação local da informação de autenticação ...",
'saveOTP_sendingDataTitle':	"Salvando a frase chave descartável",
'saveOTP_sendingDataText':	"Enviando informação de autenticação para o servidor ...",
'saveOTP_updatingInterfaceTitle':	"Salvando a frase chave descartável",
'saveOTP_updatingInterfaceText':	"Atualizando interface ...",
'accountPreferencesLabel':	"Preferências",
'accountPreferencesTabTitle':	"Preferências",
'accountPreferencesLanguageTitle':	"Seleção de idioma",
'accountPreferencesLanguageDescription':	"<p>Escolha seu idioma preferido da lista abaixo.</p> ",
'showDonationReminderPanelTitle':	"Lembretes de doação",
'showDonationReminderPanelDescription':	"<p>Mostrar lembretes de doação</p> ",
'saveUserPreferencesFormSubmitLabel':	"Salvar",
'cancelUserPreferencesFormSubmitLabel':	"Cancelar",
'accountPreferencesSavingPanelTitle_Step1':	"Salvando preferências",
'accountPreferencesSavingPanelText_Step1':	"Codificação local de suas preferências",
'accountPreferencesSavingPanelTitle_Step2':	"Salvando preferências",
'accountPreferencesSavingPanelText_Step2':	"Enviando informação codificada para o servidor",
'accountLoginHistoryLabel':	"Histórico de conexão",
'loginHistoryTabTitle':	"Histórico de conexão",
'loginHistoryReadOnlyMessage':	"<h6>Desculpe!</h6> <p>Seu histórico de conexão não está disponível quando usando uma versão offline do Clipperz.</p> ",
'loginHistoryLoadingMessage':	"<h6>Carregando informação</h6> <p>Por favor, aguarde ...</p> ",
'loginHistoryLoadedMessageConfig':	"<h6>Suas 10 últimas conexões</h6> <p> </p> ",
'loginHistoryIPLabel':	"IP",
'loginHistoryTimeLabel':	"data",
'loginHistoryCurrentSessionText':	"sessão atual",
'loginHistoryReloadButtonLabel':	"Recarregar histórico de conexão",
'deleteAccountTabLabel':	"Apagar sua conta",
'deleteAccountTabTitle':	"Apagar sua conta",
'deleteAccountFormUsernameLabel':	"nome de usuário",
'deleteAccountFormPassphraseLabel':	"frase chave",
'deleteAccountFormSafetyCheckboxLabel':	"Eu compreendo que toda minha informação será apagada e que esta ação é irreversível.",
'deleteAccountFormSubmitLabel':	"Apagar minha conta",
'deleteAccountFormWrongUsernameWarning':	"Nome de usuário errado",
'deleteAccountFormWrongPassphraseWarning':	"Frase chave errada",
'deleteAccountFormSafetyCheckWarning':	"Por favor leia e confira os campos abaixo.",
'accountPanelDeletingAccountPanelConfirmationTitle':	"ATENÇÃO",
'accountPanelDeleteAccountPanelConfirmationText':	"Você tem certeza que quer apagar esta conta?",
'accountPanelDeleteAccountPanelConfirmButtonLabel':	"Sim",
'accountPanelDeleteAccountPanelDenyButtonLabel':	"Não",
'offlineCopyTabLabel':	"Cópia offline",
'offlineCopyTabTitle':	"Cópia offline",
'offlineCopyTabDescription':	"<p>Com apenas um click você pode passar toda sua informação codificada dos servidores Clipperz para seu hard disk e criar uma versão read-only offline do Clipperz para ser utilizada quando você não estiver conectado na Internet.</p> <p>Essa versão read-only é tão segura quanto a versão online e não vai expor suas informações a riscos maiores já que ambas tem a mesma arquitetura de código e segurança.</p> <ol> <li> <p>Clique no link abaixo para iniciar o download.</p> </li> <li> <p>O navegador vai perguntar o que fazer com o arquivo “Clipperz_YYYYMMDD.html”. Grave-o em seu hard disk.</p> </li> <li> <p>Clique duas vezes no arquivo baixado para abrir a versão offline em seu navegador.</p> </li> <li> <p>Entre sua frase chave e nome de usuário como sempre faz.</p> </li> </ol> ",
'offlineCopyDownloadLinkLabel':	"Baixar",
'offlineCopyDownloadWarningConfig':	"<h4> <a href=\"#\" id=\"offlineCopyDownloadWarningLink\">Atualize sua “cópia offline”!</a> </h4> <p>Vocie recentemente criou ou modificou um ou mais cartões, seria inteligente baixar uma nova “cópia offline”.</p> ",
'sharingTabLabel':	"Compartilhar",
'sharingTabTitle':	"Compartilhar",
'sharingTabDescriptionConfig':	"<p>Frequentemente uma informação confidencial precisa ser compartilhada com uma ou mais pessoas.</p> <p>Isso pode ser tão simples quanto permitir o acesso de seus colegas ao seu voice mail quando você está fora do escritório, ou tão complicado quanto permitir que seus herdeiros acessem seu caixa num banco quando você morrer.</p> <p>Clipperz pode fazer o processo de compartilhamento simples e seguro.</p> <p> </p> <p> <b>Em breve ...</b> </p> ",
'importTabLabel':	"Importar",
'importTabTitle':	"Importar",
'importTabDescription':	"<p> <b>Em breve ...</b> <p> ",
'printingTabLabel':	"Exportar",
'printingTabTitle':	"Exportar",
'printingTabDescription':	"<p> <b>Versão para impressão</b> </p> <p>Clicando no link abaixo você abre uma nova janela contendo todos os seus cartões em formato de impressão.</p> <p>Se você vai impriir para backup, considere a opção mais segura criando uma “cópia offline”.</p> ",
'printingLinkLabel':	"Versão para impressão",
'contactsTabLabel':	"Contatos",
'contactsTabTitle':	"Contatos",
'passwordGeneratorTabLabel':	"Gerador de senhas",
'passwordGeneratorTabTitle':	"Gerador de senhas",
'passwordGeneratorTabButtonLabel':	"Gerar senha",
'bookmarkletTabLabel':	"Bookmarklet",
'bookmarkletTabTitle':	"Bookmarklet",
'bookmarkletTabDescription':	"<p>Um bookmarklet é uma ferramenta “one-click” que pode executar diversas tarefas úteis. Pode ser salva e utilizada como uma página web preferida normal.</p> <p>Os bookmarklet Clipperz vão ajudar você a a rapidamente criar novos cartões e novos logins diretos a partir dos cartões existentes.</p> <p> <b>Por favor, note que o bookmarklet não inclui nenhuma informação relacionada à sua conta (e.g. seu nome de usuário ou frase chave), o bookmarklet é um ferramenta contendo o mesmo código para todos ois usuários Clipperz.</b> </p> <h3>Como instalar o bookmarlet</h3> <h5>Firefox, Camino, Opera, Safari</h5> <ol> <li> <p>Assegure-se que a “Barra de Bookmarks” está visível, selecionando “View > Toolbars > Bookmarks”, ou menu similar no menu do navegador</p> </li> <li> <p>Arraste o link “Adicionar ao Clipperz” abaixo para a barra de bookmark.</p> </li> </ol> <h5>Internet Explorer</h5> <ol> <li> <p>Assegure-se que o barra de “Links” está visível selecionando “View > Toolbar > Links” no menu do navegador.</p> </li> <li> <p>Clique com o botão direito no link “Adicionar ao Clipperz” abaixo.</p> </li> <li> <p>Select “Selecione “Add to favorites” no menu contextual.</p> </li> <li> <p>Clique “Yes” para qualquer mensagem de segurança que surgir em pop-up.</p> </li> <li> <p>Abra o folder “Links” e clique “OK”.</p> </li> </ol> ",
'bookmarkletTabBookmarkletTitle':	"Adicionar ao Clipperz",
'bookmarkletTabInstructions':	"<h3>Como criar um novo cartão para acessar diretamente um serviço online</h3> <ol> <li> <p>Abra a página web onde o formulário de login está. (é a página onde você usualmente entra com suas credenciais)</p> </li> <li> <p>Dispare a preferência clicando nela: um pop-up vai aparecer sobre a página.</p> </li> <li> <p>Copie para o clipboard o conteúdo da área de texto do pop-up. (ctrl-C)</p> </li> <li> <p>Entre em sua conta Clipperz e clique no botão <b>Adicionar novo cartão</b>.</p> </li> <li> <p>Selecione o template de \"Login Direto\" e cole o conteúdo do clipboard para a grande área de texto do formulário. (ctrl-V)</p> </li> <li> <p>Pressione o botão <b>Criar</b>, reveja os detalhes e clique <b>Save</b>.</p> </li> </ol> <h3>Como adicionar login direto a um cartão existente</h3> <ol> <li> <p>Idem acima.</p> </li> <li> <p>Idem acima.</p> </li> <li> <p>Idem acima.</p> </li> <li> <p>Entre em sua conta Clipperz e selecione o cartão contendo as credenciais para o serviço web que você visitou e clique no botão <b>Editar</b>.</p> </li> <li> <p>Cole o conteúdo do clipboard para a grande área de texto da sessão “Logins diretos”. (ctrl-V)</p> </li> <li> <p>Pressione o botão <b>Adicionar login direto</b>, reveja os detalhes e clique <b>Salvar</b>.</p> </li> </ol> <p> </p> <p>Mais informações sobre as preferências estão <a href=\"http://www.clipperz.com/support/user_guide/bookmarklet\" target=\"_blank\">disponíveis aqui</a>.</p> ",
'mainPanelDirectLoginBlockLabel':	"Logins diretos",
'directLinkReferenceShowButtonLabel':	"mostrar",
'mainPanelDirectLoginBlockDescription':	"<p>Adicionar “logins diretos” para entrar em páginas web sem ter que digitar nome de usuário e senhas!</p> <p>“Logins diretos” ampliam a segurança de sus senha já que você pode:</p> <ul> <li> <p>utilizar senhas mais complexas;</p> </li> <li> <p>nunca re-utilizar a mesma senha fácil-de-lembrar.</p> </li> </ul> <p>Configuração simples e rápida com os <b>bookmarklet</b> Clipperz.</p> <a href=\"http://www.clipperz.com/support/user_guide/direct_logins\" target=\"_blank\">Saiba mais sobre “logins diretos”</a> ",
'mainPanelRecordsBlockLabel':	"Cartões",
'mainPanelAddRecordButtonLabel':	"Adicionar novo cartão",
'mainPanelRemoveRecordButtonLabel':	"Apagar cartão",
'mainPanelRecordFilterBlockAllLabel':	"todos",
'mainPanelRecordFilterBlockTagsLabel':	"tags",
'mainPanelRecordFilterBlockSearchLabel':	"buscar",
'recordDetailNoRecordAtAllTitle':	"Bem-vindo ao Clipperz!",
'recordDetailNoRecordAtAllDescription':	"<h5>Inicie criando cartões para sua conta.</h5> <p>Cartões são formulários simples e flexíveis onde você guarda senhas e outras informações confidenciais.</p> <p>Cartões podem conter credenciais de login a sites, a combinação do seu cadeado da bicicleta, detalhes do seu cartão de crédito, ...</p> <h5>Não esqueça o bookmarklet</h5> <p>Antes de começar, instale o bookmarklet “Adicionar ao Clipperz”: ele vai tornar o processo de criar cartões mais fácil e divertido.</p> <p> </p> <p>Depois, apenas click no botão <b>Adicionar novo cartão</b> e aproveite sua conta Clipperz.</p> <p> </p> <a href=\"http://www.clipperz.com/support/user_guide/managing_cards\" target=\"_blank\">Saiba mais sobre criar e gerenciar cartões</a> ",
'newRecordWizardTitleBox':	"<h5>Por favor selecione um template</h5> <p>Cartões são formulários simples e flexíveis onde você pode arquivar suas senhas ou outras informações confidenciais.</p> <p>Comece escolhendo um dos templates abaixo. Você poderá customizar seus cartões mais tarde, adicionando e removendo campos.</p> ",
'newRecordWizardBookmarkletConfigurationTitle':	"Login direto",
'newRecordWizardBookmarkletConfigurationDescription':	"<p>Coloque abaixo o código de configuração gerado pelo bookmarklet Clipperz.</p> <p>Um novo cartão completo com login direto para sua conta web será criado.</p> ",
'newRecordWizardCreateButtonLabel':	"Criar",
'newRecordWizardCancelButtonLabel':	"Cancelar",
'donateSplashPanelTitle':	"Apoie Clipperz, faça uma doação hoje!",
'donateSplashPanelDescription':	"<p>Algumas boas razões para doar:</p> <ul> <li> <p>apoie o desenvolvimento de novas funcionalidades</p> </li> <li> <p>mantenha Clipperz gratuito</p> </li> <li> <p>mostrar apreciação por trabalho duro</p> </li> </ul> <p>Para qualquer informação adicional, por favor visite nossa <a href=\"http://www.clipperz.com/donations\" target=\"_blank\">página de Doações</a>.</p> <p> <b>Pronto para doar?</b> </p> ",
'donateCloseButtonLabel':	"Não ainda",
'donateDonateButtonLabel':	"Sim",
'recordTemplates':	{
	'WebAccount':	{
		'title':	"Senha web",
		'description':	"<p>Um cartão simples para arquivar credenciais de login para seus serviços online.</p> ",
		'fields':	{
			'URL':	"Endereço web",
			'TXT':	"Nome de usuário ou email",
			'PWD':	"Senha"
		}
	},
	'BankAccount':	{
		'title':	"Conta bancária",
		'description':	"<p>Arquive com segurança o número de sua conta corrente e suas credenciais de online banking.</p> ",
		'fields':	{
			'TXT':	"Banco",
			'TXT':	"Número da conta",
			'URL':	"Website do banco",
			'TXT':	"ID de online banking",
			'PWD':	"Senha de online banking"
		}
	},
	'CreditCard':	{
		'title':	"Cartão de crédito",
		'description':	"<p>Número do cartão, validade, CVV2 e PIN sempre disponíveis no Clipperz</p> ",
		'fields':	{
			'TXT':	"Tipo (Visa, AmEx, ...)",
			'TXT':	"Número",
			'TXT':	"Nome do proprietário",
			'TXT':	"Prazo  de  validade",
			'TXT':	"CVV2",
			'PWD':	"PIN",
			'URL':	"Website do cartão",
			'TXT':	"Nome do usuário",
			'PWD':	"Senha"
		}
	},
	'AddressBookEntry':	{
		'title':	"Agenda de endereços",
		'description':	"<p>Clipperz pode também funcionar como sua agenda de endereços particular. Use esse template para facilmente adicionar novas entradas.</p> ",
		'fields':	{
			'TXT':	"Nome",
			'TXT':	"Email",
			'TXT':	"Fone",
			'TXT':	"Mobile",
			'ADDR':	"Endereço"
		}
	},
	'Custom':	{
		'title':	"Cartão customizado",
		'description':	"<p>Não importa o tipo de informação confidencial você precisa proteger, crie um cartão customizado para sua necessidade.</p> ",
		'fields':	{
			'TXT':	"Label 1",
			'TXT':	"Label 2",
			'TXT':	"Label 3"
		}
	}
},
'recordFieldTypologies':	{
	'TXT':	{
		'description':	"simple text field",
		'shortDescription':	"texto"
	},
	'PWD':	{
		'description':	"simple text field, with default status set to hidden",
		'shortDescription':	"senha"
	},
	'URL':	{
		'description':	"simple text field in edit mode, that became an active url in view mode",
		'shortDescription':	"endereço web"
	},
	'DATE':	{
		'description':	"a value set with a calendar helper",
		'shortDescription':	"data"
	},
	'ADDR':	{
		'description':	"just like the URL, but the active link points to Google Maps (or similar service) passing the address value as argument",
		'shortDescription':	"endereço"
	},
	'CHECK':	{
		'description':	"check description",
		'shortDescription':	"check"
	},
	'RADIO':	{
		'description':	"radio description",
		'shortDescription':	"radio"
	},
	'SELECT':	{
		'description':	"select description",
		'shortDescription':	"select"
	}
},
'newRecordPanelGeneralExceptionTitle':	"Erro",
'newRecordPanelGeneralExceptionMessage':	"O texto de configuração não é válido. Certifique-se do texto no pop-up de bookmarklet e tente novamente.",
'newRecordPanelWrongBookmarkletVersionExceptionTitle':	"Erro",
'newRecordPanelWrongBookmarkletVersionExceptionMessage':	"O texto de configuração foi gerado por uma velha versão de bookmarklet. Por favor, atualize seus preferidos e tente novamente.",
'newRecordPanelExceptionPanelCloseButtonLabel':	"Cancelar",
'mainPanelDeletingRecordPanelConfirmationTitle':	"Apagando o cartão selecionado",
'mainPanelDeleteRecordPanelConfirmationText':	"Você quer mesmo apagar o cartão selecionado?",
'mainPanelDeleteRecordPanelConfirmButtonLabel':	"Sim",
'mainPanelDeleteRecordPanelDenyButtonLabel':	"Não",
'mainPanelDeletingRecordPanelInitialTitle':	"Apagando o cartão selecionado",
'mainPanelDeletingRecordPanelCompletedText':	"Concluído",
'deleteRecordPanelCollectRecordDataMessageTitle':	"Apagar cartão",
'deleteRecordPanelCollectRecordDataMessageText':	"Atualizando lista de cartões",
'deleteRecordPanelEncryptUserDataMessageTitle':	"Apagar cartão",
'deleteRecordPanelEncryptUserDataMessageText':	"Codificação local de cabeçalhos de cartão",
'deleteRecordPanelSendingDataToTheServerMessageTitle':	"Apagar cartão",
'deleteRecordPanelSendingDataToTheServerMessageText':	"Enviando os cabeçalhos de cartão codificados para Clipperz",
'deleteRecordPanelUpdatingTheInterfaceMessageTitle':	"Apagar cartão",
'deleteRecordPanelUpdatingTheInterfaceMessageText':	"Atualizando a interface",
'recordDetailNoRecordSelectedTitle':	"Nenhum cartão selecionado",
'recordDetailNoRecordSelectedDescription':	"<p>Por favor selecione um cartão da lista na esquerda.</p> ",
'recordDetailLoadingRecordMessage':	"Baixando cartão codificados do Clipperz",
'recordDetailDecryptingRecordMessage':	"Descrição local dos dados do cartão",
'recordDetailLoadingRecordVersionMessage':	"Baixando a versão mais recente do cartão",
'recordDetailDecryptingRecordVersionMessage':	"Descrição local da versão mais recente",
'recordDetailLoadingErrorMessageTitle':	"Erro enquanto baixando o cartão",
'recordDetailNotesLabel':	"Notas",
'recordDetailLabelFieldColumnLabel':	"Legenda do campo",
'recordDetailDataFieldColumnLabel':	"Dados do campo",
'recordDetailTypeFieldColumnLabel':	"Tipo",
'recordDetailSavingChangesMessagePanelInitialTitle':	"Salvando cartão",
'recordDetailAddFieldButtonLabel':	"Adicionar novo campo",
'recordDetailPasswordFieldHelpLabel':	"para copiar a senha para o clipboard clique nas estrelas e em seguida Ctrl-C",
'recordDetailPasswordFieldScrambleLabel':	"misturar",
'recordDetailPasswordFieldUnscrambleLabel':	"mostrar",
'recordDetailDirectLoginBlockTitle':	"Logins diretos",
'recordDetailNewDirectLoginDescription':	"<p>Configuração de login direto</p> ",
'recordDetailDirectLoginBlockNoDirectLoginConfiguredDescriptionConfig':	"<p>Este cartão contém credenciais para acessar um serviço online?</p> <p>Use o bookmarklet para configurar um “login direto” desde o Clipperz com apenas um click!</p> ",
'recordDetailAddNewDirectLoginButtonLabel':	"Adicionar novo login direto",
'recordDetailEditButtonLabel':	"Editar",
'recordDetailSaveButtonLabel':	"Salvar",
'recordDetailCancelButtonLabel':	"Cancelar",
'newRecordTitleLabel':	"_novo cartão_",
'recordSaveChangesPanelCollectRecordInfoMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelCollectRecordInfoMessageText':	"Subindo cabeçalhos de cartão",
'recordSaveChangesPanelEncryptUserDataMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelEncryptUserDataMessageText':	"Codificação local do cabeçalho do cartão",
'recordSaveChangesPanelEncryptRecordDataMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelEncryptRecordDataMessageText':	"Codificação local da informação do cartão",
'recordSaveChangesPanelEncryptRecordVersionDataMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelEncryptRecordVersionDataMessageText':	"Codificação local da informação de versão do cartão",
'recordSaveChangesPanelSendingDataToTheServerMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelSendingDataToTheServerMessageText':	"Subindo o cabeçalho do cartão codificado para Clipperz",
'recordSaveChangesPanelUpdatingTheInterfaceMessageTitle':	"Salvar cartão",
'recordSaveChangesPanelUpdatingTheInterfaceMessageText':	"Atualizando a interface",
'passwordGeneratorPanelTitle':	"Gerador de senhas",
'passwordGeneratorPanelOkLabel':	"Ok",
'passwordGeneratorPanelCancelLabel':	"Cancelar",
'passwordGeneratorLengthLabel':	"compr.:",
//'DWRUtilLoadingMessage':	"Carregando ...",
'comingSoon':	"em breve ...",
'panelCollectingEntryopyMessageText':	"Coletando entropia",
'directLoginConfigurationCheckBoxFieldSelectedValue':	"Sim",
'directLoginConfigurationCheckBoxFieldNotSelectedValue':	"Não",
'WELCOME_BACK':	"Welcome back!",
'currentConnectionText':	"Você está conectado do ip&nbsp;__ip__, aparentemente desde __country__, usando __browser__ num __operatingSystem__.",
'latestConnectionText':	"Sua úlitima conexão foi __elapsedTimeDescription__ (__time__) do ip&nbsp;__ip__, aparentemente desde __country__, usando __browser__ num __operatingSystem__.",
'fullLoginHistoryLinkLabel':	"mostrar o histórico de logins completos",
'elapsedTimeDescriptions':	{
	'MORE_THAN_A_MONTH_AGO':	"mais de um mês atrás",
	'MORE_THAN_A_WEEK_AGO':	"mais de uma semana atrás",
	'MORE_THAN_*_WEEKS_AGO':	"mais de __elapsed__ semanas atrás",
	'YESTERDAY':	"ontem",
	'*_DAYS_AGO':	"__elapsed__ dias atrás",
	'ABOUT_AN_HOUR_AGO':	"cerca de uma hora atrás",
	'*_HOURS_AGO':	"__elapsed__ horas atrás",
	'JUST_A_FEW_MINUTES_AGO':	"apenas alguns minutos atrás",
	'ABOUT_*_MINUTES_AGO':	"cerca de __elapsed__ minutos atrás"
},
'unknown_ip':	"desconhecido",
'calendarStrings':	{
	'months':	{
		'0':	"Janeiro",
		'1':	"Fevereiro",
		'2':	"Março",
		'3':	"Abril",
		'4':	"Maio",
		'5':	"Junho",
		'6':	"Julho",
		'7':	"Agosto",
		'8':	"Setembro",
		'9':	"Outubro",
		'10':	"Novembro",
		'11':	"Dezembro"
	},
	'shortMonths':	{
		'0':	"Jan",
		'1':	"Fev",
		'2':	"Mar",
		'3':	"Abr",
		'4':	"Mai",
		'5':	"Jun",
		'6':	"Jul",
		'7':	"Ago",
		'8':	"Set",
		'9':	"Out",
		'10':	"Nov",
		'11':	"Dez"
	},
	'days':	{
		'0':	"Domingo",
		'1':	"Segunda-feira",
		'2':	"Terça-feira",
		'3':	"Quarta-feira",
		'4':	"Quinta-feira",
		'5':	"Sexta-feira",
		'6':	"Sábado"
	},
	'shortDays':	{
		'0':	"Dom",
		'1':	"Seg",
		'2':	"Ter",
		'3':	"Qua",
		'4':	"Quin",
		'5':	"Sex",
		'6':	"Sab"
	},
	'veryShortDays':	{
		'0':	"Do",
		'1':	"Se",
		'2':	"Te",
		'3':	"Qa",
		'4':	"Qi",
		'5':	"Se",
		'6':	"Sa"
	},
	'amDesignation':	"am",
	'pmDesignation':	"pm"
},

__syntaxFix__: "syntax fix"
});