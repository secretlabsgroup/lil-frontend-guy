import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../utils/withData';
import '../styles/scss/index.scss';

import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../utils/getPageContext';

class MyApp extends App {
	constructor() {
		super();
		this.pageContext = getPageContext();
	}
	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		console.log(pageProps);
		pageProps.query = ctx.query;

		return { pageProps };
	}
	render() {
		const { Component, apollo, pageProps } = this.props;
		console.log(this.pageContext, pageProps);
		return (
			<Container>
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					<ApolloProvider client={apollo}>
						<Page>
							<Component pageContext={this.pageContext} {...pageProps} />
						</Page>
					</ApolloProvider>
				</JssProvider>
			</Container>
		);
	}
}

export default withData(MyApp);
