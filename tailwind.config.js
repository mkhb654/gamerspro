module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        quinary: 'var(--color-quinary)',
        senary: 'var(--color-senary)',
        septenary: 'var(--color-septenary)',
        octonary: 'var(--color-octonary)',
        nonary: 'var(--color-nonary)',
        denary: 'var(--color-denary)'
      },
      fontSize: {
        '16px': ['16px', {
          lineHeight: '28px'
        }],
        '18px': ['18px', {
          lineHeight: '30px'
        }],
        '20px': ['20px', {
          lineHeight: '23.7px'
        }],
        '20pxl': ['20px', {
          lineHeight: '38px'
        }],
        '25px': ['25px', {
          lineHeight: '38px'
        }],
        '25pxl': ['25px', {
          lineHeight: '28px'
        }],
        '28px': ['28px', {
          lineHeight: '28px'
        }],
        '30px': ['30px', {
          lineHeight: '40px'
        }],
        '50px': ['50px', {
          lineHeight: '60px'
        }],
        '80px': ['80px', {
          lineHeight: '92px'
        }],
      },
      spacing: {
        '5px': '5px',
        '6px': '6px',
        '8px': '8px',
        '14px': '14px',
        '15px': '15px',
        '26px': '26px',
        '30px': '30px',
        '33px': '33px',
        '38px': '38px',
        '40px': '40px',
        '46px': '46px',
        '50px': '50px',
        '60px': '60px',
        '62.4px': '62.4px',
        '70px': '70px',
        '73px': '73px',
        '81px': '81px',
        '90px': '90px',
        '106px': '106px',
        '110px': '110px',
        '150px': '150px',
        '151px': '151px',
        '186px': '186px',
        '214px': '214px',
        '232px': '232px',
        '249px': '249px',
        '266px': '266px',
        '331px': '331px',
        '728px': '728px',
        '735px': '735px',
        '957px': '957px',
        '959px': '959px',
        '1258px': '1258px',
      },
      borderRadius: {
        '5px': '5px',
        '10px': '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen 2xl': {
            maxWidth: '1920px',
          }
        }
      })
    }
  ],
}