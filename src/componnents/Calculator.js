import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'


const getStyleName = btn => {


    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
        'Save': 'save',
    }
    return className[btn]
}
const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    // user click comma(virgule) ('.')
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }
    // user click C
    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }
    //User click number
    const handleClickButton = () => {
        const numberString = value.toString()
        let numberValue;
        if (numberString === '0' && calc.num === 0) {
            numberValue = 0
        } else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }
    //User click operator
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    // user click equals
    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                if (result[sign](a, b) >= 9001) {
                    return 'It’s Over 9000 !!!'
                } else {
                    return result[sign](a, b)
                }
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }
    // user click %
    const persenClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }
    // user click +/-
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.num * -1 : 0,
            sign: ''
        })
    }

    //user click save
    const saveClick = () => {
       
    }

    const handleBtnClick = () => {

        const result = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': persenClick,
            '+-': invertClick,
            "Save": saveClick
        }
        if (result[value]) {
            return result[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button