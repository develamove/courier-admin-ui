import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import 'github-markdown-css'

const About = () => {
  const intl = useIntl()

  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'about', defaultMessage: 'About' })}
    >
      <Scrollbar>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <h1>About page</h1>
        </div>
      </Scrollbar>
    </Page>
  )
}
export default About