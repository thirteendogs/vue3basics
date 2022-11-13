import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res) {
            throw Error('Could not complete de signup')
        }
        await res.user.updateProfile({ displayName })
        error.value = null

        return res
    } catch (err) {
        console.log(err.message);
        error.value = err.message
    }
}

const useSignup = () => {
    return { error , signup}
}

export default useSignup