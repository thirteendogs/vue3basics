import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)

const signin = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        console.log(res);
        error.value = null
        
        return res
    } catch (err) {
        console.log(err.message);
        error.value = 'Incorrect sig in credentials'
    }
}

const useSignin = () => {
    return { error , signin}
}

export default useSignin