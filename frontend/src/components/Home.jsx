import React, { useState } from 'react'
import './Home.css'

const Home = () => {

    
    

        return(
            <>
        <div className='firma'>
            <input type="text" className='firmaInput'></input>
            <p className='danejednostki'>(dane jednostki)</p>
        </div>
        <div className='bilans'>
            BILANS
        </div>
        <div className='rozliczenie'>
            Sporządzony na dzień: <input type="date"></input>
        </div>
        <div className='jednostka'>
            <i>Jednostka obliczeniowa: zł</i>
        </div>
        <div className='tabela'>
            <table className='table'>
                <tr>
                    <th> </th>
                    <th className='glowne'>AKTYWA</th>
                    <th className='glowne'>Dzień kończący</th>
                    <th> </th>
                    <th className='glowne'>PASYWA</th>
                    <th className='glowne'>Dzień kończący</th>
                </tr>
                <tr>
                    <td className='kategoria'>A</td>
                    <td className='kategoria'>Aktywa trwałe</td>
                    <td className='kategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='kategoria'>A </td>
                    <td className='kategoria'>Kapitał własny</td>
                    <td className='kategoria'>
                        <form>
                            <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>I</td>
                    <td className='podkategoria'>Wartości niematerialne i prawne</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł." ></input>
                        </form>
                    </td>
                    <td className='podkategoria'>I </td>
                    <td className='podkategoria'>Kapitał Podstawowy</td>
                    <td className='podkategoria'>
                        <form>
                            <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>II</td>
                    <td className='podkategoria'>Rzeczowe aktywa trwałe, w tym:</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł." ></input>
                        </form>
                    </td>
                    <td className='podkategoria'>II </td>
                    <td className='podkategoria'>Kapitał zapasowy w tym:</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>środki trwałe</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>  </td>
                    <td>Nadwyżka wartości sprzedaży nad wartością nominalną udziałów</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>Środki trwałe w budowie</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>III </td>
                    <td className='podkategoria'>Kapitał z aktualizacji wyceny, w tym:</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>III</td>
                    <td className='podkategoria'>Należności długoterminowe</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>  </td>
                    <td>z tytułu aktualizacji wartości godzinowej</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>IV</td>
                    <td className='podkategoria'>Inwestycje długoterminowe, w tym: </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>IV</td>
                    <td className='podkategoria'>Pozostałe kapitały rezerwowe</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>nieruchomości</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>V</td>
                    <td className='podkategoria'>Zysk/strata z lat ubiegłych </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>długoterminowe aktywa finansowe</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>VI </td>
                    <td className='podkategoria'>Zysk/ strata netto</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>V</td>
                    <td className='podkategoria'>Długoterminowe rozliczenia międzyokresowe</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>VII  </td>
                    <td className='podkategoria'>Odpisy z zysku netto w ciągu roku obrotowego</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='kategoria'>B</td>
                    <td className='kategoria'>Aktywa obrotowe</td>
                    <td className='kategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='kategoria'>B </td>
                    <td className='kategoria'>Zobowiązania i rezerwy na zobowiązania</td>
                    <td className='kategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>I</td>
                    <td className='podkategoria'>Zapasy</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>I</td>
                    <td className='podkategoria'>Rezerwy na zobowiązania, w tym: </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>II</td>
                    <td className='podkategoria'>Należności, krótkotermiowe, w tym: </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>  </td>
                    <td>Rezerwa na świadczenia emerytalne i podobne</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> a </td>
                    <td>z tytułu dostaw i usług, w tym:</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>II </td>
                    <td className='podkategoria'>Zobowiązania długoterminowe, w tym</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>do 12 miesięcy</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td> </td>
                    <td>z tytułu kredytów i pożyczek</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>powyżej 12 miesięcy</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>III </td>
                    <td className='podkategoria'>Zobowiązania krótkotermiowe, w tym: </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>III </td>
                    <td className='podkategoria'> Inwestycje krótkotermiowe w tym: </td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>a </td>
                    <td>Z tytułu kredytów i pożyczek</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td>a</td>
                    <td>krótkotermiowe aktywa finansowe, w tym: </td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>b </td>
                    <td>z tytułu dostaw i usług, w tym: </td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td> </td>
                    <td>środki pieniężne w kasie i na rachunkach</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>  </td>
                    <td>do 12 miesięcy</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='podkategoria'>IV</td>
                    <td className='podkategoria'>krótkotermiowe rozliczenia międzyokresowe</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td> </td>
                    <td>powyżej 12 miesięcy</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='kategoria'>C</td>
                    <td className='kategoria'>Należne wpłaty na kapitał podstawowy</td>
                    <td className='kategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td>c </td>
                    <td>Fundusze specjalne</td>
                    <td>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <td className='kategoria'>D</td>
                    <td className='kategoria'>Udziały własne</td>
                    <td className='kategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                    <td className='podkategoria'>IV </td>
                    <td className='podkategoria'>Rozliczenia międzyokresowe</td>
                    <td className='podkategoria'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </td>
                </tr><tr>
                    <th> </th>
                    <th className='glowne'>AKTYWA razem</th>
                    <th className='glowne'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </th>
                    <th className='glowne'> </th>
                    <th className='glowne'>PASYWA razem</th>
                    <th className='glowne'>
                        <form>
                        <input type="number" className='form' placeholder="Wartość w zł."></input>
                        </form>
                    </th>
                </tr>
            </table>
        </div>
        </>
        );
        }

export default Home