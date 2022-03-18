import React, { useState } from 'react';


function useLocalStorage (key, value) {
    
    try {
        if (!key && !value) {
            throw new Error('undefined parameters!!, verify that the parameters are being sent')
            return 0;
        }
        // declaration access to localstore
        const localModules = {
            save: function(key, anyObject) {
                localStorage.setItem(key, JSON.stringify(anyObject))
                setItem(anyObject)
            },
            get: function(key) {
                return JSON.parse(localStorage.getItem(key))
            }
        }
        // set state localStorage
        const [item, setItem] = useState(() => {
            const data = localModules.get(key)
            if (data) {
                return data;
            } else {
                return value;
            }
        });
    
        return [
            item,
            localModules.save
        ];
    } catch (error) {
        console.error('ups, error to save data localStorage!', error);
    }
}



export { useLocalStorage };