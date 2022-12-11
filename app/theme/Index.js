import { createTheme } from '@rneui/themed';

export default function customTheme() {
const customTheme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
})
return(customTheme);
}